$(document).ready(function () {
    var $card1 = $('.card1')
      $.ajax({
          type: 'GET',
          url: "https://reqres.in/api/users?page=1",
          success: (function (members) {
              $.each(members.data, function (i, data) {
                  
                  $('#tmembers').append("<tr class='tmember'>" + 
                      `<td class='tmember-avatar'> <img src= ${data.avatar} class='rounded-circle avatar'>  </img> </td>` +
                      `<td class='tmember-name'> ${data.first_name} </td>`+
                      `<td class='tmember-email'> ${data.email} </td>`+
                      `<td class='tmember-position'> Developer  </td>`+
                      `<td class='tmember-status'> <button class='btn btn-primary'>  Activated  </button>  </td>` +
                      `<td class='icons'> <img src=${'./images/icons8-settings-16.png'}>  </img> <img src=${'./images/icons8-sort-down-16.png'}>   </img> </td>`         
                  +"</tr>")
              })
          }),
          dataType: 'json',
      })
}) 