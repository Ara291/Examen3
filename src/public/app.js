$(function () {

  const URI = '/api/usuario';

  // GET usuario
  $('#getusuario').on('click', () => {
    $.ajax({
      url: URI,
      success: function (usuario) {
        let tbody = $('tbody');
        tbody.html('');
        usuario.forEach(user => {
          tbody.append(`
              <tr>
                <td class="id">${user.id}</td>
                <td>
                  <input type="text" class="nombre" value="${user.nombre}"/>
                </td>
                <td>
                  <input type="text" class="apellidos" value="${user.apellidos}"/>
                </td>
                <td>
                  <input type="text" class="carrera" value="${user.carrera}"/>
                </td>
                <td>
                  <input type="text" class="matricula" value="${user.matricula}"/>
                </td>
                <td>
                  <button class="update-button">UPDATE</button>
                  <button class="delete-button">DELETE</button>
                </td>
              </tr>
          `)
        })
      }
    });
  });

  // POST usuario
  $('#userForm').on('submit', (e) => {
    e.preventDefault();
    let nombre = $('#nombre');
    let apellidos = $('#apellidos');
    let carrera = $('#carrera');
    let matricula = $('#matricula');
    $.ajax({
      url: URI,
      method: 'POST',
      data: {
        nombre: nombre.val(),
        apellidos: apellidos.val(),
        carrera: carrera.val(),
        matricula: matricula.val(),
      },
      success: function(response) {
       nombre.val('');
       apellidos.val('');
       carrera.val('');
       matricula.val('');
       $('#getusuario').click();
      },
      error: function (err) {
        console.log(err);
      }
    });
  });
  // actualizar
  $('table').on('click', '.update-button', function() {
    let row = $(this).closest('tr');
    let id = row.find('.id').text();
    let nombre = row.find('.nombre').val();
    let apellidos = row.find('.apellidos').val();
    let matricula = row.find('.matricula').val();
    let carrera = row.find('.carrera').val();

    $.ajax({
      url: `${URI}/${id}`,
      method: 'PUT',
      data: {
        nombre: nombre,
        apellidos: apellidos,
        matricula: matricula,
        carrera: carrera,
      },
      success: function(response) {
        console.log(response);
        $('#getusuario').click();
      }
    });
  });

  $('table').on('click', '.delete-button', function() {
    let row = $(this).closest('tr');
    let id = row.find('.id').text();

    $.ajax({
      url: `${URI}/${id}`,
      method: 'DELETE',
      success: function (response) {
       $('#getusuario').click();
      }
    });
  });


  // $('hola').on('click',function() {
  //     $.ajax({
  //       url: URI,
  //       method: 'GET',
  //       data: {
  //         nombre: nombre.val(),
  //         apellidos: apellidos.val(),
  //         carrera: carrera.val(),
  //         matricula: matricula.val(),
  //       }
  //   });
  // });

});
