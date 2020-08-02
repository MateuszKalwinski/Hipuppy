class frontendIndex{constructor(e){this.init(e)}init(e){this.promotedAnimalsSlick(),this.promotedSheltersSlick(),this.getAnimalSpecies(e),this.counter(),this.UX(e)}UX(){$("#animalSpecies").on("change",function(){$("#searchAnimalsFrom").submit()})}promotedAnimalsSlick(){$(".promoted_animals").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,fade:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]})}promotedSheltersSlick(){$(".promoted_shelter").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,fade:!1,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]})}counter(){!function(e){e.fn.counter=function(){const a=e(this),t=parseInt(a.attr("data-from")),o=parseInt(a.attr("data-to")),r=o-t,s=r>0?1:0,l=parseInt(a.attr("data-time"));let n=t,i=10*r/l;var d;d=setInterval(()=>{n+=i,(s&&n>=o||!s&&n<=o)&&(n=o),this.text(parseInt(n)),n==o&&clearInterval(d)},10)}}(jQuery),$(document).ready(function(){$(".count-up").counter(),$(".count1").counter(),$(".count2").counter(),$(".count3").counter(),(new WOW).init(),setTimeout(function(){$(".count5").counter()},3e3)})}getAnimalSpecies(e){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:e+"/getAnimalSpecies",data:{},dataType:"json",success:function(e){let a=$("#animalSpecies");a.children().remove(),a.append('<option value="" disabled selected>Znajdź...</option>');for(var t=0;t<e.length;t++)a.append('<option value="'+e[t].id+'">'+e[t].name+"</option>")},error:function(e){alert(e)}})}}class frontendAnimal{constructor(e){this.init(e)}init(e){this.UX(e),this.slider()}UX(){let e=this;$("#scrollToMap").click(function(){$([document.documentElement,document.body]).animate({scrollTop:$("#map").offset().top},1e3)}),$("#scrollToContact").click(function(){$([document.documentElement,document.body]).animate({scrollTop:$("#contact").offset().top},1e3)}),$("#showPhoneNumbers").click(function(){let a=$(this).attr("data-user-id");e.showPhoneNumbers(a)}),$("#sendReport").click(function(){e.sendReport()})}slider(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!1,arrows:!0,focusOnSelect:!0})}showPhoneNumbers(e){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:base_url+"/getPhoneNumbers",data:{user_id:e},dataType:"json",beforeSend:function(){$("#showPhoneNumbers").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Wyświetl numery').addClass("disabled")},success:function(e){$("#user_phones").children().remove();for(var a=0;a<e.length;a++)$("#user_phones").append('<p class="card-text">'+e[a].phone+"</p>")},complete:function(){$("#showPhoneNumbers").html('Wyświetl numery<i class=" ml-2 fas fa-lg text-white fa-phone"></i>').removeClass("disabled")},error:function(e){alert(e)}})}sendReport(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});let e=$("#sendReport");$.ajax({type:"POST",url:base_url+"/sendReport",data:{reportViolationReason:$("input[name='reportViolation']:checked").val(),reportViolationText:$("#reportViolationText").val(),animalId:e.attr("data-animal-id")},dataType:"json",beforeSend:function(){e.prop("disabled",!0)},success:function(e){if(e.original){if(e.original.errors){var a="";jQuery.each(e.original.errors,function(e,t){a+=t+"<br>"}),(new Errors).showErrorModal(a)}}else e.errors?($("#reportViolationModal").modal("hide"),(new Errors).showErrorModal(e.errors.global)):($("#reportViolationModal").modal("hide"),(new Success).showSuccessModal("Zapisano",e.success.global))},complete:function(){e.prop("disabled",!1)},error:function(e){}})}}class frontendAnimals{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){}}class frontendShelter{constructor(e){this.init(e)}init(e){this.UX(e),this.slider()}UX(){let e=this;$("#scrollToMap").click(function(){$([document.documentElement,document.body]).animate({scrollTop:$("#map").offset().top},1e3)}),$("#scrollToAnimalsForAdoption").click(function(){$([document.documentElement,document.body]).animate({scrollTop:$("#animalsForAdoption").offset().top},1e3)}),$("#scrollToAnimalsAdopted").click(function(){$([document.documentElement,document.body]).animate({scrollTop:$("#animalsAdopted").offset().top},1e3)}),$("#showPhoneNumbers").click(function(){let a=$(this).attr("data-user-id");e.showPhoneNumbers(a)})}slider(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!1,arrows:!0,focusOnSelect:!0})}showPhoneNumbers(e){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:base_url+"/getPhoneNumbers",data:{user_id:e},dataType:"json",beforeSend:function(){$("#before_send").fadeIn()},success:function(e){$("#showPhoneNumbers").addClass("d-none"),$("#user_phones").children().remove();for(var a=0;a<e.length;a++)$("#user_phones").append('<p class="card-text">'+e[a].phone+"</p>")},complete:function(){$("#before_send").fadeOut()},error:function(e){alert(e)}})}}class frontendShelters{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#cityName").on("input",function(){let a=$("#cityName").val();a.length>=2&&e.searchCity(a)})}searchCity(e){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"GET",url:base_url+"/searchCities",data:{term:e},dataType:"json",beforeSend:function(){},success:function(e){$("#cityName").autocomplete({source:e,select:function(e,a){$("#cityId").val(a.item.id)}})},complete:function(){},error:function(e){console.log(e)}})}}class frontendUser{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#showPhoneNumbers").click(function(){let a=$(this).attr("data-user-id");e.showPhoneNumbers(a)})}showPhoneNumbers(e){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:base_url+"/getPhoneNumbers",data:{user_id:e},dataType:"json",beforeSend:function(){$("#before_send").fadeIn()},success:function(e){$("#showPhoneNumbers").addClass("d-none"),$("#user_phones").children().remove();for(var a=0;a<e.length;a++)$("#user_phones").append('<p class="card-text">'+e[a].phone+"</p>")},complete:function(){$("#before_send").fadeOut()},error:function(e){alert(e)}})}}class backendProfile{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#add-phone-number").on("click",function(){$("#phone-title-modal").text("Dodaj numer telefonu"),$("#save-phone-number").attr("data-phone-id",""),$("#phone-number").val(""),$("label[for='phone-number']").removeClass("active"),$("#phone-modal").modal("show")}),$(".edit-phone-number ").on("click",function(){let e=$(this).closest("tr").find(".phone-number").text();$("#save-phone-number").attr("data-phone-id",$(this).attr("data-phone-id")),$("#phone-number").val(e),$("label[for='phone-number']").addClass("active"),$("#phone-title-modal").text("Edytuj numer telefonu"),$("#phone-modal").modal("show")}),$("#save-phone-number").on("click",function(){e.savePhoneNumber()}),$(".delete-phone-number").on("click",function(){let a=$(this).attr("data-phone-id");e.deletePhoneNumber(a)})}savePhoneNumber(){let e=$("#save-phone-number");$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:base_url+"/savePhoneNumber",data:{phoneId:e.attr("data-phone-id"),phoneNumber:$("#phone-number").val()},dataType:"json",beforeSend:function(){e.prop("disabled",!0)},success:function(e){if(e.original){if(e.original.errors){var a="";jQuery.each(e.original.errors,function(e,t){a+=t+"<br>"}),(new Errors).showErrorModal(a)}}else e.errors?(new Errors).showErrorModal(e.errors.global):(new Success).showSuccessModal("Zapisano",e.success.global)},complete:function(){e.prop("disabled",!1)},error:function(e){}})}deletePhoneNumber(e){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:base_url+"/deletePhoneNumber",data:{phoneId:e},dataType:"json",beforeSend:function(){},success:function(e){if(e.original){if(e.original.errors){var a="";jQuery.each(e.original.errors,function(e,t){a+=t+"<br>"}),(new Errors).showErrorModal(a)}}else e.errors?(new Errors).showErrorModal(e.errors.global):(new Success).showSuccessModal("Usunięto",e.success.global)},complete:function(){},error:function(e){}})}}class BackendAnimalColors{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#addColor").click(function(){$("#addEditModalTitle").text("Dodaj kolor"),$(".modal-header ").addClass("teal lighten-1").removeClass("yellow darken-2 danger-color green darken-2"),$("#colorName").val(""),$('label[for="colorName"]').removeClass("active"),$("#action").val("add"),$("#animalColorId").val(""),$("#addEditColorModal").modal("show")}),$(document).on("click",".edit-animal-color",function(){$("#addEditModalTitle").text("Edytuj kolor"),$(".modal-header ").addClass("yellow darken-2").removeClass("teal lighten-1 danger-color green");let e=$(this).closest("tr").find(".animal-color-name").text();$("#colorName").val(e),$('label[for="colorName"]').addClass("active"),$("#action").val("edit");let a=$(this).closest("tr").find(".animal-color-name").attr("data-animal-color-id");$("#animalColorId").val(a),$("#addEditColorModal").modal("show")}),$("#addEditColor").on("submit",function(a){a.preventDefault(),"add"===$("#action").val()?e.saveAnimalColor(new FormData(this),base_url+"/adminStoreAnimalColor"):e.saveAnimalColor(new FormData(this),base_url+"/adminUpdateAnimalColor")}),$(document).on("click",".restore-animal-color, .delete-animal-color",function(){$(this).hasClass("restore-animal-color")?($("#actionDeleteRestore").val("restore"),$("#animalRestoreText").removeClass("d-none").children().removeClass("d-none"),$("#animalDeleteText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("green darken-2").removeClass("danger-color yellow darken-2 teal lighten-1")):($("#actionDeleteRestore").val("delete"),$("#animalDeleteText").removeClass("d-none").children().removeClass("d-none"),$("#animalRestoreText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("danger-color").removeClass("green darken-2 yellow darken-2 teal lighten-1"));let e=$(this).closest("tr").find(".animal-color-name").attr("data-animal-color-id");$("#confirm-yes").attr("data-animal-color-id",e);let a=$(this).closest("tr").find(".animal-color-name").text();$(".confirm-animal-color-name").text(a),$("#confirmModal").modal("show")}),$("#confirm-yes").on("click",function(){let a=$("#confirm-yes").attr("data-animal-color-id");"restore"===$("#actionDeleteRestore").val()?e.deleteRestoreAnimalColor(a,base_url+"/restoreAnimalColor"):e.deleteRestoreAnimalColor(a,base_url+"/deleteAnimalColor")})}deleteRestoreAnimalColor(e,a){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:a,data:{animalColorId:e},dataType:"json",beforeSend:function(){},success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#adminAnimalColorsTable").DataTable().ajax.reload()),$("#form_result").html(a)},complete:function(){},error:function(e){}})}saveAnimalColor(e,a){$.ajax({url:a,method:"POST",data:e,contentType:!1,cache:!1,processData:!1,dataType:"json",success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#colorName").val(""),$("#adminAnimalColorsTable").DataTable().ajax.reload()),$("#form_result").html(a)}})}}class BackendAnimalFurs{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#addFur").click(function(){$("#addEditModalTitle").text("Dodaj długość futra"),$(".modal-header ").addClass("teal lighten-1").removeClass("yellow darken-2"),$("#furName").val(""),$('label[for="furName"]').removeClass("active"),$("#action").val("add"),$("#animalFurId").val(""),$("#addEditFurModal").modal("show")}),$(document).on("click",".edit-animal-fur",function(){$("#addEditModalTitle").text("Edytuj długość futra"),$(".modal-header ").addClass("yellow darken-2").removeClass("teal lighten-1");let e=$(this).closest("tr").find(".animal-fur-name").text();$("#furName").val(e),$('label[for="furName"]').addClass("active"),$("#action").val("edit");let a=$(this).closest("tr").find(".animal-fur-name").attr("data-animal-fur-id");$("#animalFurId").val(a),$("#addEditFurModal").modal("show")}),$("#addEditFur").on("submit",function(a){a.preventDefault(),"add"===$("#action").val()?e.saveAnimalColor(new FormData(this),base_url+"/adminStoreAnimalFur"):e.saveAnimalColor(new FormData(this),base_url+"/adminUpdateAnimalFur")}),$(document).on("click",".restore-animal-fur, .delete-animal-fur",function(){$(this).hasClass("restore-animal-fur")?($("#actionDeleteRestore").val("restore"),$("#animalRestoreText").removeClass("d-none").children().removeClass("d-none"),$("#animalDeleteText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("green darken-2").removeClass("danger-color teal lighten-1 yellow darken-2")):($("#actionDeleteRestore").val("delete"),$("#animalDeleteText").removeClass("d-none").children().removeClass("d-none"),$("#animalRestoreText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("danger-color").removeClass("green darken-2 teal lighten-1 yellow darken-2"));let e=$(this).closest("tr").find(".animal-fur-name").attr("data-animal-fur-id");$("#confirm-yes").attr("data-animal-fur-id",e);let a=$(this).closest("tr").find(".animal-fur-name").text();$(".confirm-animal-fur-name").text(a),$("#confirmModal").modal("show")}),$("#confirm-yes").on("click",function(){console.log($("#confirm-yes"));let a=$("#confirm-yes").attr("data-animal-fur-id"),t=$("#actionDeleteRestore").val();e.deleteRestoreAnimalFur(a,t,base_url+"/deleteRestoreAnimalFur")})}deleteRestoreAnimalFur(e,a,t){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:t,data:{animalFurId:e,action:a},dataType:"json",beforeSend:function(){},success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#adminAnimalFursTable").DataTable().ajax.reload()),$("#form_result").html(a)},complete:function(){},error:function(e){}})}saveAnimalColor(e,a){$.ajax({url:a,method:"POST",data:e,contentType:!1,cache:!1,processData:!1,dataType:"json",success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#furName").val(""),$("#adminAnimalFursTable").DataTable().ajax.reload()),$("#form_result").html(a)}})}}class BackendAnimalSizes{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#addSize").click(function(){$("#addEditModalTitle").text("Dodaj wielkość zwierzaka"),$(".modal-header ").addClass("teal lighten-1").removeClass("yellow darken-2 danger-color green darken-2"),$("#sizeName").val(""),$('label[for="sizeName"]').removeClass("active"),$("#action").val("add"),$("#animalSizeId").val(""),$("#addEditSizeModal").modal("show")}),$(document).on("click",".edit-animal-size",function(){$("#addEditModalTitle").text("Edytuj wielkość zwierzaka"),$(".modal-header ").addClass("yellow darken-2").removeClass("teal lighten-1 danger-color green");let e=$(this).closest("tr").find(".animal-size-name").text();$("#sizeName").val(e),$('label[for="sizeName"]').addClass("active"),$("#action").val("edit");let a=$(this).closest("tr").find(".animal-size-name").attr("data-animal-size-id");$("#animalSizeId").val(a),$("#form_result").html(""),$("#addEditSizeModal").modal("show")}),$("#addEditSize").on("submit",function(a){a.preventDefault(),"add"===$("#action").val()?e.saveAnimalSize(new FormData(this),base_url+"/adminStoreAnimalSize"):e.saveAnimalSize(new FormData(this),base_url+"/adminUpdateAnimalSize")}),$(document).on("click",".restore-animal-size, .delete-animal-size",function(){$(this).hasClass("restore-animal-size")?($("#actionDeleteRestore").val("restore"),$("#animalRestoreText").removeClass("d-none").children().removeClass("d-none"),$("#animalDeleteText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("green darken-2").removeClass("danger-color yellow darken-2 teal lighten-1")):($("#actionDeleteRestore").val("delete"),$("#animalDeleteText").removeClass("d-none").children().removeClass("d-none"),$("#animalRestoreText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("danger-color").removeClass("green darken-2 yellow darken-2 teal lighten-1"));let e=$(this).closest("tr").find(".animal-size-name").attr("data-animal-size-id");$("#confirm-yes").attr("data-animal-size-id",e);let a=$(this).closest("tr").find(".animal-size-name").text();$(".confirm-animal-size-name").text(a),$("#confirmModal").modal("show")}),$("#confirm-yes").on("click",function(){let a=$("#confirm-yes").attr("data-animal-size-id");"restore"===$("#actionDeleteRestore").val()?e.deleteRestoreAnimalSize(a,base_url+"/restoreAnimalSize"):e.deleteRestoreAnimalSize(a,base_url+"/deleteAnimalSize")})}deleteRestoreAnimalSize(e,a){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:a,data:{animalSizeId:e},dataType:"json",beforeSend:function(){},success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#adminAnimalSizeTable").DataTable().ajax.reload()),$("#form_result").html(a)},complete:function(){},error:function(e){}})}saveAnimalSize(e,a){$.ajax({url:a,method:"POST",data:e,contentType:!1,cache:!1,processData:!1,dataType:"json",success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#sizeName").val(""),$("#adminAnimalSizeTable").DataTable().ajax.reload()),$("#form_result").html(a)}})}}class backendAnimalCharacteristics{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#addCharacteristic").click(function(){$("#addEditModalTitle").text("Dodaj cechę zwierzaka"),$(".modal-header ").addClass("teal lighten-1").removeClass("yellow darken-2 danger-color green darken-2"),$("#characteristicName").val(""),$('label[for="colorName"]').removeClass("active"),$("#action").val("add"),$("#animalCharacteristicId").val(""),$("#addEditCharacteristicModal").modal("show")}),$(document).on("click",".edit-dictionary-characteristic",function(){$("#addEditModalTitle").text("Edytuj cechę zwierzaka"),$(".modal-header ").addClass("yellow darken-2").removeClass("teal lighten-1 danger-color green");let e=$(this).closest("tr").find(".characteristic-dictionary-name").text();$("#characteristicName").val(e),$('label[for="characteristicName"]').addClass("active"),$("#action").val("edit");let a=$(this).closest("tr").find(".characteristic-dictionary-name").attr("data-characteristic-dictionary-id");$("#animalCharacteristicId").val(a),$("#addEditCharacteristicModal").modal("show")}),$("#addEditCharacteristic").on("submit",function(a){a.preventDefault(),"add"===$("#action").val()?e.saveAnimalCharacteristic(new FormData(this),base_url+"/adminStoreAnimalCharacteristic"):e.saveAnimalCharacteristic(new FormData(this),base_url+"/adminUpdateAnimalCharacteristic")}),$(document).on("click",".restore-dictionary-characteristic, .delete-dictionary-characteristic",function(){$(this).hasClass("restore-dictionary-characteristic")?($("#actionDeleteRestore").val("restore"),$("#animalRestoreText").removeClass("d-none").children().removeClass("d-none"),$("#animalDeleteText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("green darken-2").removeClass("danger-color yellow darken-2 teal lighten-1")):($("#actionDeleteRestore").val("delete"),$("#animalDeleteText").removeClass("d-none").children().removeClass("d-none"),$("#animalRestoreText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("danger-color").removeClass("green darken-2 yellow darken-2 teal lighten-1"));let e=$(this).closest("tr").find(".characteristic-dictionary-name").attr("data-characteristic-dictionary-id");$("#confirm-yes").attr("data-dictionary-characteristic-id",e);let a=$(this).closest("tr").find(".characteristic-dictionary-name").text();$(".confirm-dictionary-characteristic-name").text(a),$("#showHideContent").show(),$("#confirmModal").modal("show")}),$("#confirm-yes").on("click",function(){let a=$("#confirm-yes").attr("data-dictionary-characteristic-id");"restore"===$("#actionDeleteRestore").val()?e.deleteRestoreDictionaryCharacteristic(a,base_url+"/restoreAnimalCharacteristic"):e.deleteRestoreDictionaryCharacteristic(a,base_url+"/deleteAnimalCharacteristic")})}deleteRestoreDictionaryCharacteristic(e,a){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:a,data:{animalCharacteristicId:e},dataType:"json",beforeSend:function(){},success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#showHideContent").slideUp(),$("#adminAnimalCharacteristicsTable").DataTable().ajax.reload()),$("#confirmFormResult").html(a)},complete:function(){},error:function(e){}})}saveAnimalCharacteristic(e,a){$.ajax({url:a,method:"POST",data:e,contentType:!1,cache:!1,processData:!1,dataType:"json",success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#characteristicName").val(""),$("#adminAnimalCharacteristicsTable").DataTable().ajax.reload()),$("#formResult").html(a)}})}}class BackendAnimalSpecies{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){let e=this;$("#addSpecies").click(function(){$("#addEditModalTitle").text("Dodaj gatunek"),$(".modal-header ").addClass("teal lighten-1").removeClass("yellow darken-2 danger-color green darken-2"),$("#speciesName").val(""),$('label[for="speciesName"]').removeClass("active"),$("#action").val("add"),$("#animalSpeciesId").val(""),$("#addEditSpeciesModal").modal("show")}),$(document).on("click",".edit-animal-species",function(){$("#addEditModalTitle").text("Edytuj gatunek"),$(".modal-header ").addClass("yellow darken-2").removeClass("teal lighten-1 danger-color green");let e=$(this).closest("tr").find(".animal-species-name").text();$("#speciesName").val(e),$('label[for="speciesName"]').addClass("active"),$("#action").val("edit");let a=$(this).closest("tr").find(".animal-species-name").attr("data-animal-species-id");$("#animalSpeciesId").val(a),$("#form_result").html(""),$("#addEditSpeciesModal").modal("show")}),$("#addEditSpecies").on("submit",function(a){a.preventDefault(),"add"===$("#action").val()?e.saveAnimalSpecies(new FormData(this),base_url+"/adminStoreAnimalSpecies"):e.saveAnimalSpecies(new FormData(this),base_url+"/adminUpdateAnimalSpecies")}),$(document).on("click",".delete-animal-species",function(){let e=$(this).closest("tr").find(".animal-species-name").attr("data-animal-species-id");$("#confirm-yes").attr("data-animal-species-id",e);let a=$(this).closest("tr").find(".animal-species-name").text();$("#animalSpeciesName").text(a),$("#confirmModal").modal("show")}),$(document).on("click",".restore-animal-species, .delete-animal-species",function(){$(this).hasClass("restore-animal-species")?($("#actionDeleteRestore").val("restore"),$("#animalRestoreText").removeClass("d-none").children().removeClass("d-none"),$("#animalDeleteText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("green darken-2").removeClass("danger-color yellow darken-2 teal lighten-1")):($("#actionDeleteRestore").val("delete"),$("#animalDeleteText").removeClass("d-none").children().removeClass("d-none"),$("#animalRestoreText").addClass("d-none").children().addClass("d-none"),$("#confirmModalHeader").addClass("danger-color").removeClass("green darken-2 yellow darken-2 teal lighten-1"));let e=$(this).closest("tr").find(".characteristic-dictionary-name").attr("data-characteristic-dictionary-id");$("#confirm-yes").attr("data-animal-species-id",e);let a=$(this).closest("tr").find(".animal-species-name").text();$(".confirm-animal-species-name").text(a),$("#showHideContent").show(),$("#confirmModal").modal("show")}),$("#confirm-yes").on("click",function(){let a=$("#confirm-yes").attr("data-animal-species-id");"restore"===$("#actionDeleteRestore").val()?e.deleteRestoreAnimalSpecies(a,base_url+"/restoreAnimalSpecies"):e.deleteRestoreAnimalSpecies(a,base_url+"/deleteAnimalSpecies")})}deleteRestoreAnimalSpecies(e,a){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:a,data:{animalSpeciesId:e},dataType:"json",beforeSend:function(){},success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#showHideContent").slideUp(),$("#adminSpeciesTable").DataTable().ajax.reload()),$("#confirmFormResult").html(a)},complete:function(){},error:function(e){}})}saveAnimalSpecies(e,a){$.ajax({url:a,method:"POST",data:e,contentType:!1,cache:!1,processData:!1,dataType:"json",success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#colorName").val(""),$("#adminSpeciesTable").DataTable().ajax.reload()),$("#form_result").html(a)}})}}class BackendAvailableColors{constructor(e){this.init(e)}init(e){this.UX(e),this.getBreeds(),this.getColors()}UX(e){let a=this;$("#addAvailableColor").click(function(){$("#addEditModalTitle").text("Dodaj kolor dla rasy"),$(".modal-header ").addClass("teal lighten-1").removeClass("yellow darken-2 danger-color green darken-2"),$("#breedId").val(""),$("#colors").val(""),$("#action").val("add"),$("#animalBreedId").val(""),$("#addEditAvailableColorModal").modal("show")}),$(document).on("click",".edit-available-color",function(){let e=$(this).closest("tr").find(".animal-breed-name").attr("data-animal-breed-id");a.getAvailableColorsForBreed(e),$("#addEditModalTitle").text("Edytuj cechę zwierzaka"),$(".modal-header ").addClass("yellow darken-2").removeClass("teal lighten-1 danger-color green"),$("#action").val("edit")}),$("#addEditAvailableColor").on("submit",function(t){t.preventDefault(),"add"===$("#action").val()?a.saveAvailableColors(new FormData(this),e+"/adminStoreAvailableColors"):a.saveAvailableColors(new FormData(this),e+"/adminUpdateAvailAbleColors")}),$(document).on("click",".delete-available-color",function(){let e=$(this).closest("tr").find(".animal-species-name").text(),a=$(this).closest("tr").find(".animal-breed-name").text(),t=$(this).closest("tr").find(".animal-color-name").text();$(".confirm-animal-color-name").text(t),$(".confirm-animal-breed-name").text(e+" "+a),$("#confirm-yes").attr("data-available-color-id",$(this).attr("data-available-color-id")),$("#confirmModalHeader").addClass("danger-color").removeClass("green darken-2 yellow darken-2 teal lighten-1"),$("#showHideContent").slideDown(),$("#confirmModal").modal("show")}),$("#confirm-yes").on("click",function(){let t=$("#confirm-yes").attr("data-available-color-id");a.deleteAvailableColor(t,e+"/deleteAvailableColor")})}getAvailableColorsForBreed(e){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:base_url+"/getAvailableColorsForBreed",data:{animalBreedId:e},dataType:"json",beforeSend:function(){$(".edit-available-color[data-available-color-id='"+e+"']").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Wyświetl numery').addClass("disabled")},success:function(a){if(a.errors,a.success){for(let e=0;e<a.success.length;e++)$("#colors option[value="+a.success[e].color_id+"]").attr("selected",!0);$("#colors").materialSelect(),$("#breedId").val(e)}},complete:function(){$(".edit-available-color[data-available-color-id='"+e+"']").html('<i class="fas fa-edit"></i>').removeClass("disabled"),$("#addEditAvailableColorModal").modal("show")},error:function(e){}})}saveAvailableColors(e,a){$.ajax({url:a,method:"POST",data:e,contentType:!1,cache:!1,processData:!1,dataType:"json",success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#adminAvailableColorsTable").DataTable().ajax.reload()),$("#formResult").html(a)}})}getBreeds(e=null){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({url:base_url+"/getBreeds",method:"POST",data:{breed_id:e},cache:!0,dataType:"json",beforeSend:function(){},success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}else{$("#breedId").append('<option value="" disabled selected>Wybierz rasę</option>');for(let a=0;a<e.length;a++){let t="";t+='<optgroup label="'+e[a].species_name+'" data-species-id="'+e[a].species_id+'">';for(let o=0;o<e[a].breeds.length;o++)t+='<option value="'+e[a].breeds[o].id+'">'+e[a].breeds[o].name+"</option>";t+="</optgroup>",$("#breedId").append(t)}}$("#form_result").html(a)},complete:function(){}})}getColors(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({url:base_url+"/getColors",method:"POST",data:{},cache:!0,dataType:"json",success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}else{$("#colors").append('<option value="" disabled selected>Wybierz kolor/y</option>');for(let a=0;a<e.length;a++)$("#colors").append('<option value="'+e[a].id+'">'+e[a].name+"</option>")}$("#form_result").html(a)}})}deleteAvailableColor(e,a){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$.ajax({type:"POST",url:a,data:{availableColorId:e},dataType:"json",beforeSend:function(){},success:function(e){var a="";if(e.errors){a='<div class="alert alert-danger">';for(var t=0;t<e.errors.length;t++)a+="<p>"+e.errors[t]+"</p>";a+="</div>"}e.success&&(a='<div class="alert alert-success">'+e.success+"</div>",$("#showHideContent").slideUp(),$("#adminAvailableColorsTable").DataTable().ajax.reload()),$("#confirmFormResult").html(a)},complete:function(){},error:function(e){}})}}class Errors{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){$(document).on("click",".modal-error-close",function(){$("#modalError").modal("hide"),setTimeout(function(){$("#modalError").remove()},1e3)})}showErrorModal(e){$("body").append('    <div class="modal fade right" id="modalError" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"      aria-hidden="true" data-backdrop="true">      <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-danger" role="document">        <div class="modal-content">          <div class="modal-header">            <p class="heading">Ups! coś poszło nie tak. </p>          </div>          <div class="modal-body">            <div class="row">              <div class="col-12">                <p>'+e+'</p>              </div>            </div>          </div>            <div class="modal-footer flex-center">              <button class="modal-error-close w-50 btn btn-danger btn-rounded text-white waves-effect waves-light text-transform-none">                  Zamknij              </button>            </div>          </div>        </div>      </div>    </div>'),$("#modalError").modal({backdrop:"static",keyboard:!1}),$("#modalError").modal("show")}}class Success{constructor(e){this.init(e)}init(e){this.UX(e)}UX(){$(document).on("click",".modal-success-close",function(){$("#modalSuccess").modal("hide"),setTimeout(function(){$("#modalSuccess").remove()},1e3)})}showSuccessModal(e,a){$("body").append('    <div class="modal fade right" id="modalSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"      aria-hidden="true" data-backdrop="true">      <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-success" role="document">        <div class="modal-content">          <div class="modal-header">            <p class="heading">'+e+' </p>          </div>          <div class="modal-body">            <div class="row">              <div class="col-12">                <p>'+a+'</p>              </div>            </div>          </div>            <div class="modal-footer flex-center">              <button class="modal-success-close w-50 btn btn-success btn-rounded text-white waves-effect waves-light text-transform-none">                  Zamknij              </button>            </div>          </div>        </div>      </div>    </div>'),$("#modalSuccess").modal({backdrop:"static",keyboard:!1}),$("#modalSuccess").modal("show")}}
