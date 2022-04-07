$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const flavorInput = $("input#flavor").val();
    const ageformInput = $("input#ageform").val();
    const heightInput= $("input#height").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").append(person1Input);
    $(".ageform").append(ageformInput);
    $(".height").append(heightInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
const flavor = $("input:radio[name=flavor]:checked").val();