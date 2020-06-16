$(document).ready(function () {
    var $card1 = $('.card1')
      $.ajax({
          type: 'GET',
          url: "https://reqres.in/api/users?page=1",
          success: (function (members) {
              $.each(members.data, function (i, data) {
                  
                  $('#tdata').append("<tr>" +
                      `<td> <img src= ${data.avatar} class='rounded-circle'>  </img> </td>`+
                      `<td> ${data.first_name} </td>`+
                      `<td> ${data.email} </td>`+
                      `<td> Developer  </td>`+
                      `<td> <button class='btn btn-primary'>  Activated  </button>  </td>` +
                      `<td> <img src=${'./images/icons8-settings-16.png'}>   </img> </td>` +
                      `<td> <img src=${'./images/icons8-sort-down-16.png'}>   </img> </td>` 
                       
                      
                      
                  +"</tr>")
              })
          }),
          dataType: 'json',
      })
}) 