<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;


class UploadController extends Controller
{
    //

    // upload files
    public static function upload($file , $allow , $profilePhoto=False){
       


            //get filename with extension
            $filenamewithextension = $file->getClientOriginalName();
      
            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
      
            //get file extension
            $extension = $file->getClientOriginalExtension();
      
            //filename to store
            $filenametostore = $filename.'_'.time().'.'.$extension;


            $path = ($profilePhoto)  ? "photos/" : "course/" ;  
            
            
            if(!in_array($extension , $allow))
                return "error";
            $file->move($path , $filenametostore );


            return "storage/".$path.$filenametostore;
        
    }
}
