<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function show(User $vendor)
    {
        $vendor->load('shop');
        return response()->json([
            'id' => $vendor->id,
            'name' => $vendor->name,
            'email' => $vendor->email,
            'phone' => $vendor->phone,
            'role' => $vendor->role,
            'shop' => $vendor->shop ? [
                'id' => $vendor->shop->id,
                'name' => $vendor->shop->name,
                'address' => $vendor->shop->address,
                'phone' => $vendor->shop->phone,
                'gst_number' => $vendor->shop->gst_number,
                'logo' => $vendor->shop->logo ? asset($vendor->shop->logo) : null,
            ] : null,
            'created_at' => $vendor->created_at,
        ]);
    }

    // Render edit page (Inertia)
    public function edit(User $vendor)
    {
        //  $this->authorize('update', $vendor); // ensure permission (owner/admin)
        $vendor->load('shop');
        return Inertia::render('Admin/vendor/Edit', [
            'vendor' => [
                'id' => $vendor->id,
                'name' => $vendor->name,
                'email' => $vendor->email,
                'phone' => $vendor->phone,
            ],
            'shop' => $vendor->shop ? [
                'id' => $vendor->shop->id,
                'name' => $vendor->shop->name,
                'address' => $vendor->shop->address,
                'phone' => $vendor->shop->phone,
                'gst_number' => $vendor->shop->gst_number,
                'logo' => $vendor->shop->logo,
            ] : null,
        ]);
    }

    public function update(Request $request, User $vendor)
    {
        // $this->authorize('update', $vendor); // ensure permission (owner/admin)

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => "required|email|max:255|unique:users,email,{$vendor->id}",
            'phone' => 'nullable|string|max:20',
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $vendor->name = $validated['name'];
        $vendor->email = $validated['email'];
        $vendor->phone = $validated['phone'] ?? null;

        if(!empty($validated['password'])) {
            $vendor->password = Hash::make($validated['password']);
        }

        $vendor->save();

        return redirect()->back()->with('success', 'Vendor updated successfully.');
    }
}
