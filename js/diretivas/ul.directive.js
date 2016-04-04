angular
  .module('app')
  .directive('ul', function() {
    return {
      restrict: 'E',
      link: function(scope, elem, attr) {
        elem.find('li').on('click', function() {
          elem.find('li').removeClass('active');
          $(this).addClass('active');
        });
      }
    };
  });
