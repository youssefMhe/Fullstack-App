<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public  function ListTask()
    { $ListTask =Task::all();;

        return response()->json($ListTask);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->isMethod('post')){
            $Task = new Task();
            $Task->name = $request->name;
            $Task->description = $request->description;
            $Task->date = $request->date;
            $Task->User_id = $request->User_id;
            $Task->save();
            return response()->json($Task);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param   int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        //
        if($request->isMethod('put')){
        $T= Task::find($id);
        $T->name = $request->name;
        $T->description = $request->description;
        $T->date = $request->date;
        $T->User_id = $request->User_id;
        $T->save();
        return response()->json($T);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param   int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Task::find($id)->delete();
        return ('Task has been deleted');
    }
}
