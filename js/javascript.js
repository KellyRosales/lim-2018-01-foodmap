//console.log(data)

$(document).ready(function () {
  const $inputText = $('#input-text');
  const $inputButton = $('#input-button');
  const $openModal = $('#openModal');
  const $food =$('#food')

  district = ['Miraflores', 'Barranco', 'Chorrillos']

  district.map(e => {
    data[e].map(elemt => {
      $food.append(`
      <div class="w3-quarter">
        <img src="${elemt.image}" style="width:100%">
        <a href="#openModal" class='modal-restaurant' data-rating="${elemt.rating}" data-type="${elemt.type}" data-image="${elemt.image}" data-address="${elemt.address}" data-name="${elemt.name}" data-description="${elemt.description}">${elemt.name}</a>
      </div>`);
    })
  })

  $inputButton.on('click', function(event) {  
    var district = $inputText.val();

    $food.html('')
    data[district].map(elemt => {
      $food.append(`
      <div class="w3-quarter">
        <img src="${elemt.image}" style="width:100%">
        <a href="#openModal" class='modal-restaurant' data-rating="${elemt.rating}" data-type="${elemt.type}" data-image="${elemt.image}" data-address="${elemt.address}" data-name="${elemt.name}" data-description="${elemt.description}">${elemt.name}</a>
      </div>`);
    })
    const $modal = $('#food a[href="#openModal"]');

    $modal.on('click', function() {
      event.preventDefault()
      let dataImg = $(this).attr('data-image'); 
      let dataName = $(this).attr('data-name');
      let dataType = $(this).attr('data-type');
      let dataRating = $(this).attr('data-rating');
      let dataAddress = $(this).attr('data-address');
      let dataDescription = $(this).attr('data-description');
  
      $('#openModal').find('#image').attr('src', dataImg);
      $('#openModal').find('#name').text(dataName);
      $('#openModal').find('#type').text('Tipo: ' + dataType);
      $('#openModal').find('#rating').text('Puntaje: ' + dataRating);
      $('#openModal').find('#address').text('Dirección: ' + dataAddress);
      $('#openModal').find('#description').text('Descripción: ' + dataDescription);
    });
  });
});