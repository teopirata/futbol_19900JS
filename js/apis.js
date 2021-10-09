
      let image = document.querySelector("#img1");
      let nombre = document.querySelector("#nombre");
      let image2 = document.querySelector("#img2");
      let nombre2 = document.querySelector("#nombre2");
      

      function equipo1(logo,nombreEquipo){
        image.setAttribute("src",logo);
        nombre.innerHTML = nombreEquipo;
      }
      function equipo2(logo,nombreEquipo){
        image2.setAttribute("src",logo);
        nombre2.innerHTML = nombreEquipo;
      }
      
      
      let key = "13599b4101b50a31d9b046cf8f0fe5f568b0a23cfd823f13e601771b094e93e9";


      function mostrarEquipos(idEquipo,fucionEquipo){

      fetch(`https://allsportsapi.com/api/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}`)
      .then(response =>response.json())
      .then((equipos) => {
        fucionEquipo(
    
        equipos.result[0].team_logo,
        equipos.result[0].team_name)
        });
        }
    
        mostrarEquipos(203,equipo1);
        mostrarEquipos(201,equipo2);
