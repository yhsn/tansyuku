$('.shorten_source').on('keyup keypress', function() {
  var source = this.value;
  $('.shorten_result').val(source.replace(/[ぁ-んァ-ン]/g, ''));
});
