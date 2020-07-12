@extends('layouts.backend')

@section('content')

    <div id="ModuleName" data-moduleName="backendAvailableColors">
        <div id="contact" class="container-fluid mb-4 min-vh-100">
            <div class="row">
                <div class="col-lg-12 col-md-12 mb-4">
                    <h2 class="color-mid-grey">Kolory zwierzaków dla ras</h2>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-end">
                        <button id="addAvailableColor"
                                class="btn teal lighten-1 btn-rounded pl-5 pr-5 text-white waves-effect waves-light text-transform-none m-0 mb-3">
                            Dodaj Kolor do rasy <i class="ml-2 fas fa-lg text-white fa-plus"></i></button>
                    </div>
                    <table id="adminAvailableColorsTable" class="table table-striped table-bordered" cellspacing="0"
                           width="100%">
                        <thead>
                        <tr>
                            <th class="th-sm" data-toggle="tooltip" data-placement="top" title="ID dostępnego koloru">ID</th>
                            <th class="th-sm" data-toggle="tooltip" data-placement="top" title="Nazwa rasy zwierzaka">
                                Gatunek
                            </th>
                            <th class="th-sm" data-toggle="tooltip" data-placement="top" title="Nazwa rasy zwierzaka">
                                Rasa
                            </th>
                            <th class="th-sm" data-toggle="tooltip" data-placement="top" title="Nazwa dostępnego koloru">Kolor
                            </th>
                            <th class="th-sm" data-toggle="tooltip" data-placement="top" title="Data dodania">Data dodania
                            </th>
                            <th class="th-sm" data-toggle="tooltip" data-placement="top" title="Data aktualizacja">Data aktualizacji
                            </th>
                            <th colspan="th-sm" data-toggle="tooltip" data-placement="top" title="Akcje Usuń/Edytuj">
                                Akcje
                            </th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addEditAvailableColorModal" tabindex="-1" role="dialog" aria-labelledby="Dodaj/Edytuj kolor"
             aria-hidden="true">
            <div class="modal-dialog modal-lg modal-notify mt-5" role="document">
                <div class="modal-content">
                    <div class="modal-header text-center teal lighten-1">
                        <h4 class="modal-title white-text w-100 font-weight-bold py-2"><span id="addEditModalTitle">Dodaj kolor dla rasy</span></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="white-text">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <span id="form_result"></span>
                        <form id="addEditAvailableColor" style="color: #757575;" method="post">
                            @csrf
                            <div class="form-row">
                                <div class="col m-2">
                                    <!-- First name -->
                                    <div class="md-form">
                                        <select id="breeds" name="breeds" class="mdb-select md-form" multiple searchable="Wyszukaj rasę/y" data-visible-options="10" data-max-selected-options="-1">

                                        </select>
                                        <button type="button" class="btn indigo lighten-1 btn-rounded text-white waves-effect waves-light text-transform-none btn-sm btn-save">Wybierz</button>
                                    </div>
                                </div>
                                <div class="col m-2">
                                    <!-- First name -->
                                    <div class="md-form">
                                        <select id="colors" name="colors" class="mdb-select md-form" multiple searchable="Wyszukaj kolor/y" data-visible-options="10" data-max-selected-options="-1">

                                        </select>
                                        <button type="button" class="btn indigo lighten-1 btn-rounded text-white waves-effect waves-light text-transform-none btn-sm btn-save">Wybierz</button>
                                    </div>
                                </div>
                            </div>


                            <div class="md-form mt-0 mb-0 text-left">
                                <input type="hidden" name="action" id="action" />
                                <input type="hidden" name="animalColorId" id="animalColorId" />
                                <button type="submit" name="action_button" id="action_button" class="btn indigo lighten-1 btn-rounded pl-5 pr-5 text-white waves-effect waves-light text-transform-none m-0 mb-3">
                                    Zapisz</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="Usuń kolor"
             aria-hidden="true">
            <div class="modal-dialog modal-lg modal-notify mt-5" role="document">
                <div class="modal-content">
                    <div id="confirmModalHeader" class="modal-header text-center danger-color">
                        <h4 class="modal-title white-text w-100 font-weight-bold py-2">Potwierdzenie</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="white-text">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <span id="form_result"></span>
                        <p id="animalDeleteText" class="text-center">Czy na pewno chcesz usunąć kolor zwierzaka <span class="font-weight-bold confirm-animal-color-name d-none"></span></p>
                        <p id="animalRestoreText" class="text-center">Czy na pewno chcesz przywrócić kolor zwierzaka <span class="font-weight-bold confirm-animal-color-name d-none"></span></p>
                        <div class="w-50 mx-auto">
                            <div class="d-flex justify-content-around">
                                <button type="button" id="confirm-yes" data-animal-color-id="" class="btn success-color btn-rounded pl-5 pr-5 text-white waves-effect waves-light text-transform-none m-0 mb-3">
                                    Tak
                                </button>
                                <button type="button" id="confirm-no" data-dismiss="modal" class="btn danger-color btn-rounded pl-5 pr-5 text-white waves-effect waves-light text-transform-none m-0 mb-3">
                                    Nie
                                </button>
                            </div>
                            <input id="actionDeleteRestore" type="hidden" value="">
                        </div>
                    </div>
                </div>
            </div>
        </div>



        @push('scripts')
            <script>
                $(document).ready(function(){
                    $(function () {
                        $('[data-toggle="tooltip"]').tooltip()
                    })

                    const datatablePL = {
                        "processing": "Przetwarzanie...",
                        "search": "Szukaj:",
                        "lengthMenu": "Pokaż _MENU_ pozycji",
                        "info": "Pozycje od _START_ do _END_ z _TOTAL_ łącznie",
                        "infoEmpty": "Pozycji 0 z 0 dostępnych",
                        "infoFiltered": "(filtrowanie spośród _MAX_ dostępnych pozycji)",
                        "infoPostFix": "",
                        "loadingRecords": "Wczytywanie...",
                        "zeroRecords": "Nie znaleziono pasujących pozycji",
                        "emptyTable": "Brak danych",
                        "paginate": {
                            "first": "Pierwsza",
                            "previous": "Poprzednia",
                            "next": "Następna",
                            "last": "Ostatnia"
                        },
                        "aria": {
                            "sortAscending": ": aktywuj, by posortować kolumnę rosnąco",
                            "sortDescending": ": aktywuj, by posortować kolumnę malejąco"
                        }
                    }

                    $('#adminAvailableColorsTable').DataTable({
                        language: datatablePL,
                        select: true,
                        order: [[0, "desc"]],
                        processing: true,
                        serverSide: true,
                        ajax: {
                            url: "{{ route('adminAvailableColors') }}"
                        },
                // ->rawColumns(['available_color_id', 'species_name', 'breed_name', 'color_name', 'available_color_created_at', 'available_color_updated_at', 'action'])

                    columns: [
                            {
                                data: 'available_color_id',
                                name: 'available_color_id',
                            },
                            {
                                data: 'species_name',
                                name: 'species_name',
                            },
                            {
                                data: 'breed_name',
                                name: 'breed_name',
                            },
                            {
                                data: 'color_name',
                                name: 'color_name',
                            },
                            {
                                data: 'available_color_created_at',
                                name: 'available_color_created_at',
                            },
                            {
                                data: 'available_color_updated_at',
                                name: 'available_color_updated_at',
                            },
                            {
                                data: 'action',
                                name: 'action',
                                orderable: false,
                            }
                        ]
                    });

                    $('#adminAvailableColorsTable_wrapper').find('label').each(function () {
                        $(this).parent().append($(this).children());
                    });
                    $('#adminAvailableColorsTable_wrapper .dataTables_filter').find('input').each(function () {
                        const $this = $(this);
                        $this.attr("placeholder", "Search");
                        $this.removeClass('form-control-sm');
                    });
                    $('#adminAvailableColorsTable_wrapper .dataTables_length').addClass('d-flex flex-row');
                    $('#adminAvailableColorsTable_wrapper .dataTables_filter').addClass('md-form');
                    $('#adminAvailableColorsTable_wrapper select').removeClass(
                        'custom-select custom-select-sm form-control form-control-sm');
                    $('#adminAvailableColorsTable_wrapper select').addClass('mdb-select');
                    $('#adminAvailableColorsTable_wrapper .dataTables_filter').find('label').remove();
                });
            </script>

    @endpush

@endsection
