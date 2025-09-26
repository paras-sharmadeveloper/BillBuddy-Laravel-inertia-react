<?php

namespace App\Helpers;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploadHelper
{

     public static function upload(?UploadedFile $file, string $folder, ?string $oldFile = null): ?string
    {
        if (!$file) {
            return $oldFile;
        }

        $disk = config('filesystems.default');

        // delete old file if exists
        if ($oldFile && Storage::disk($disk)->exists($oldFile)) {
            Storage::disk($disk)->delete($oldFile);
        }

        // store new file (Laravel automatically generates unique filename)
        $path = $file->store($folder, $disk);

        // store only "folder/filename.ext" in DB
        return $path;
    }

    public static function url(?string $path): ?string
    {
        if (!$path) {
            return null;
        }

        $disk = config('filesystems.default');
        return Storage::disk($disk)->url($path);
    }
}
