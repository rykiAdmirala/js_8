$(function() {

  var $resultWrapper = $('<div class="result-wrap"></div>').appendTo('.wrapper');

  function search(e) {

    e.preventDefault();
    var searchQuery = $('.search-input').val();
    var url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag="+encodeURIComponent(searchQuery);

    $.getJSON(url, function(data) {

      $resultWrapper.empty();

      var resultList = '<ul class="result-list">';

      // Rendering HTML for each list-element (image)
      $.each(data.results, function() {
        resultItem =
             '<li>' +
               '<a target="_blank" href="'+ this.itemurl +'" title="'+ this.title +'">' +
                 '<img src="' + this.media[0].tinygif.url + '">' +
               '</a>' +
             '</li>';

        resultList += resultItem;
      });

      resultList += '</ul>';

      $resultWrapper.append(resultList);

    });

    $('body').removeClass('start-page');
    $resultWrapper.append('<div class="ajax-loading-modal"></div>');
  }


  // Attaching handlers
  $('.search-submit').on('click', search);

  $(document).on({
    ajaxStart: function() { $resultWrapper.addClass('loading') },
    ajaxStop: function() { $resultWrapper.removeClass('loading') }
  });

});