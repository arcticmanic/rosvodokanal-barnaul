const hey = {
  ajax: {
    url: '/test/getGEO.php',
    dataType: 'json',
    method: 'post',
    data: function (params) {
      var queryParameters = {
        name: params.inputVal,
      }

      return queryParameters
    },
    processResults: function (data) {
      return {
        results: $.map(data.data, function (obj) {
          return { id: obj.id, text: obj.email }
        }),
      }
    },
  },
}
