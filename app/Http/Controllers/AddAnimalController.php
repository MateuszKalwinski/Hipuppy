<?php

namespace App\Http\Controllers;

use App\Hipuppy\Gateways\AddAnimalGateway;
use App\Hipuppy\Interfaces\AddAnimalRepositoryInterface;
use Illuminate\Http\Request;


class AddAnimalController extends Controller
{
    public function __construct(AddAnimalRepositoryInterface $addAnimalRepository, AddAnimalGateway $addAnimalGateway)
    {

        $this->middleware('auth')->only(['favourite']);

        $this->aaR = $addAnimalRepository;
        $this->aaG = $addAnimalGateway;
    }

    public function index()
    {
        return view('backend.addAnimal.index');
    }

    public function getSpeciesForAddAnimal(Request $request)
    {

        $speciesForAddAnimal = $this->aaG->getSpeciesForAddAnimal($request);

        return $speciesForAddAnimal;

    }

    public function getGendersForAddAnimal()
    {
        $gendersForAddAnimal = $this->aaR->getGendersForAddAnimal();

        return $gendersForAddAnimal;
    }

    public function getSizesForAddAnimal()
    {
        $sizesForAddAnimal = $this->aaR->getSizesForAddAnimal();

        return $sizesForAddAnimal;
    }
}
