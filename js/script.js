$(function() {

  var resultList = '';

  function search(e) {
    e.preventDefault();
    var searchQuery = $('.search-input').val();

    var url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag="+encodeURIComponent(searchQuery);
    $.getJSON(url, function(data) {
      resultList = '<ul class="result-list>';

      $.each(data.results, function() {
        resultItem =
             '<li>' +
               '<a href="'+ this.itemurl +'" title="'+ this.title +'">' +
                 '<img src="' + this.media[0].tinygif.url + '">' +
               '</a>' +
             '</li>';

        resultList += resultItem;
      });

      resultList += '<div class="ajax-loader"></div></ul>';

      $('.wrapper').append(resultList);

    });

    $('.body').removeClass('start-page');
  }


  $('.search-submit').on('click', search);

  $(document).on({
    ajaxStart: function() { $(resultList).addClass('loading') },
    ajaxStop: function() { $(resultList).removeClass('loading') }
  });

});