<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

use Auth;
class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $postOnPage = 5;
    public function index($page = 0)
    {
        //
        if(auth("api")->user()->type == 0) {  
        $files  =  File::with('user')->orderBy('created_at' ,'desc')->where('class', '!=' , "0")->skip($page*$this->postOnPage)->take($this->postOnPage)->get();
        
        
        $count  =  File::with('user')->orderBy('created_at' ,'desc')->where('class', '!=' , "0")->count();
}else{
        $userClass =  auth("api")->user()->class;
        $files  =  File::with('user')->orderBy('created_at' ,'desc')->where('class', 'LIKE' , "%$userClass%")->skip($page*$this->postOnPage)->take($this->postOnPage)->get();
        
        
        $count  =  File::with('user')->orderBy('created_at' ,'desc')->where('class', 'LIKE' , "%$userClass%")->count();

}
     
        
        return response()->json(["files" => $files , "count" => $count ]) ;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // return $request;
        try {

            
            //   return dd($request->all());
            $request->validate([
                "title" => "required|max:255",
                "course" => "required",
                "class" => "required",
                "matier" => "required",

            ]);
            // return $request->class;
            $path = UploadController::upload($request->file('course'), ["jpg" , "png" , "jpeg" ,"pdf" , "doc", 'docx']);
            if($path == "error")
                abort(422);
            $file = File::create([
                "title" => $request->title,
                "path" => $path,
                "class" =>  $request->class,
                "matier" => $request->matier,
                "user_id" => Auth::id(),

            ]);

            return response()->json(['message' => 'success' ]);
        }catch(Exception $e) {
            return response()->json(['message' => 'error' ]);

        }
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\File  $file
     */
    public function show(File $file)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function edit(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // return auth("api")->user() ;
        if(auth("api")->user()->type == "0" )
            File::find($id)->delete();
        else 
            return abort(404);
        return response()->json(['message'=> "deleted" ]);

    }
}
