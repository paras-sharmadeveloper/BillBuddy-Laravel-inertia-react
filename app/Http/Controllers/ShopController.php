<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;
use App\Helpers\FileUploadHelper;

class ShopController extends Controller
{
    public function update(Request $request, Shop $shop)
    {
        // $this->authorize('update', $shop->user); // or custom policy

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'gst_number' => 'nullable|string|max:50',
            'logo' => 'nullable|image|max:2048',
        ]);

         $data['logo'] = FileUploadHelper::upload($request->file('logo'), 'shops', $shop->logo);


        $shop->fill($data);
        $shop->save();

        return redirect()->back()->with('success', 'Shop updated successfully.');
    }
}
