
(function () {
      var app = angular.module('myView', []);
      angular.module('myApplication', ['angular-parallax']);
      app.controller('ProjectController', function ($scope) {

          var feaProj = [
            {
                name: 'NUTRIBOX AB',
                imgSrc: 'img/nb_thumbnail.jpg',
                desc1: 'WORDPRESS',
                desc2: 'HTML/CSS',
                desc3: 'PHOTOSHOP',
                role: 'Front-Dev, UI/UX, Graphic Design',
                link: 'nutribox.html'
            },
            {
                name: 'Application Form / Admin',
                imgSrc: 'img/form_thumbnail.jpg',
                desc1: 'HTML/CSS',
                desc2: 'ANGULARJS',
                desc3: 'PHOTOSHOP',
                role: 'Front-Dev, Graphic Design',
                link: 'form-project.html'
            },

            {
                name: 'Portfolio site',
                imgSrc: 'img/Portfoliosite_thumbnail.jpg',
                desc1: 'HTML/CSS',
                desc2: 'ANGULARJS',
                desc3: 'PHOTOSHOP',
                role: 'Front-Dev, UI / UX, Graphic Design',
                link: 'portfolio.html'

            },

             {
                    name: 'TOUCHBASE Business Card',
                    imgSrc: 'img/business_thumbnail.jpg',
                    desc1: 'PHOTOSHOP',
                    role: 'Graphic Design',
                    link: 'touchbase-business.html'

                },
                {
                    name: 'TOUCHBASE APP',
                    imgSrc: 'img/tb_app_thumbnail.jpg',
                    desc1: 'PHOTOSHOP',
                    role: 'Graphic Design',
                    link: 'touchbase-mobile.html'



                },
                {
                    name: 'Aurora AB (Redesign)',
                    imgSrc: 'img/aurora_thumbnail2.jpg',
                    desc1: 'HTML',
                    desc2: 'CSS',
                    desc3: 'BOOTSTRAP',
                    role: 'Front-Dev',
                    link: 'aurora.html'

                },



         ];


        var feaProj2 = [

          {
              name: 'Phoenix Law Firm',
              imgSrc: 'img/law_firm_thumbnail.jpg',
              desc1: 'HTML/CSS',
              desc2: 'ANGULARJS',
              desc3: 'PHOTOSHOP',
              role: 'Front-Dev, UI/UX, Graphic Design',
              link: 'Phoenixlaw.html'
          },

            {
                  name: 'N4G (Redesign)',
                  imgSrc: 'img/N4G_Thumbnail.jpg',
                  desc1: 'PHOTOSHOP',
                  desc2: '',
                  desc3: '',
                  role: 'Web Design, UI/UX',
                  link: 'N4G.html'

              },
              {
                    name: 'Go For Broke',
                    imgSrc: 'img/GOFORBROKE_thumbnail.jpg',
                    desc1: 'PHOTOSHOP',
                    desc2: '',
                    desc3: '',
                    role: 'Front-Dev, Web Design, UI/UX',
                    link: 'goforbroke.html'

                },

                {
                    name: 'NUTRIBOX AB',
                    imgSrc: 'img/nb_thumbnail.jpg',
                    desc1: 'WORDPRESS',
                    desc2: 'HTML/CSS',
                    desc3: 'PHOTOSHOP',
                    role: 'Front-Dev, UI/UX, Graphic Design',
                    link: 'nutribox.html'
                },
                {
                      name: 'Dungeon Fighter Online',
                      imgSrc: 'img/DFO_thumbnail.jpg',
                      desc1: 'PHOTOSHOP',
                      desc2: '',
                      desc3: '',
                      role: 'Web Design, UI/UX',
                      link: 'DFO.html'

                  },



          {
              name: 'Portfolio site',
              imgSrc: 'img/Portfoliosite_thumbnail.jpg',
              desc1: 'HTML/CSS',
              desc2: 'ANGULARJS',
              desc3: 'PHOTOSHOP',
              role: 'Front-Dev, UI/UX, Graphic Design',
              link: 'portfolio.html'

          },

           {
                  name: 'TOUCHBASE Business Card',
                  imgSrc: 'img/business_thumbnail.jpg',
                  desc1: 'PHOTOSHOP',
                  role: 'Graphic Design',
                  link: 'touchbase-business.html'

              },
              {
                  name: 'TOUCHBASE APP',
                  imgSrc: 'img/tb_app_thumbnail.jpg',
                  desc1: 'PHOTOSHOP',
                  role: 'Graphic Design',
                  link: 'touchbase-mobile.html'



              },
              {
                  name: 'Aurora AB (Redesign)',
                  imgSrc: 'img/aurora_thumbnail2.jpg',
                  desc1: 'HTML',
                  desc2: 'CSS',
                  desc3: 'BOOTSTRAP',
                  role: 'Front-Dev',
                  link: 'aurora.html'

              },




      ];

          $scope.projects = feaProj;
          $scope.projects2 = feaProj2;
      });




  }());



                // $(document).ready(function () {
                //     $("#fot").load("html/footer.html");
                // });






            //     var feaProj = [
            //       {
            //           name: 'NUTRIBOX AB',
            //           imgSrc: 'img/nb_thumbnail.jpg',
            //           desc1: 'WORDPRESS',
            //           desc2: 'HTML/CSS',
            //           desc3: 'PHOTOSHOP',
            //           role: 'Front-Dev, UI/UX, Graphic Design',
            //           link: 'nutribox.html'
            //       },
            //       {
            //           name: 'Application Form / Admin',
            //           imgSrc: 'img/form_thumbnail.jpg',
            //           desc1: 'HTML/CSS',
            //           desc2: 'ANGULARJS',
            //           desc3: 'PHOTOSHOP',
            //           role: 'Front-Dev, Graphic Design',
            //           link: 'form-project.html'
            //       },
            //
            //       {
            //           name: 'Portfolio site',
            //           imgSrc: 'img/Portfoliosite_thumbnail.jpg',
            //           desc1: 'HTML/CSS',
            //           desc2: 'ANGULARJS',
            //           desc3: 'PHOTOSHOP',
            //           role: 'Front-Dev, UI / UX, Graphic Design',
            //           link: 'portfolio.html'
            //
            //       },
            //
            //        {
            //               name: 'TOUCHBASE Business Card',
            //               imgSrc: 'img/business_thumbnail.jpg',
            //               desc1: 'PHOTOSHOP',
            //               role: 'Graphic Design',
            //               link: 'touchbase-business.html'
            //
            //           },
            //           {
            //               name: 'TOUCHBASE APP',
            //               imgSrc: 'img/tb_app_thumbnail.jpg',
            //               desc1: 'PHOTOSHOP',
            //               role: 'Graphic Design',
            //               link: 'touchbase-mobile.html'
            //
            //
            //
            //           },
            //           {
            //               name: 'Aurora AB (Redesign)',
            //               imgSrc: 'img/aurora_thumbnail2.jpg',
            //               desc1: 'HTML',
            //               desc2: 'CSS',
            //               desc3: 'BOOTSTRAP',
            //               role: 'Front-Dev',
            //               link: 'aurora.html'
            //
            //           },
            //
            //
            //
            //    ];



        //     var feaProj = [
        //       {
        //           name: 'NUTRIBOX AB',
        //           imgSrc: 'img/nb_thumbnail.jpg',
        //           desc1: 'WORDPRESS',
        //           desc2: 'HTML/CSS',
        //           desc3: 'PHOTOSHOP',
        //           role: 'Front-Dev, UI/UX, Graphic Design',
        //           link: 'nutribox.html',
        //           bdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales sapien. Donec condimentum congue est. Nam est quam, suscipit at lorem quis, iaculis tincidunt tortor. Quisque augue ipsum, fermentum eget finibus ut, ultricies id sapien. Praesent tempor metus nec orci tempus.'
        //       },
          //
        //       {
        //           name: 'Portfolio site',
        //           imgSrc: 'img/Portfoliosite_thumbnail.jpg',
        //           desc1: 'HTML/CSS',
        //           desc2: 'ANGULARJS',
        //           desc3: 'PHOTOSHOP',
        //           role: 'Front-Dev, UI / UX, Graphic Design',
        //           link: 'portfolio.html',
        //           bdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales sapien. Donec condimentum congue est. Nam est quam, suscipit at lorem quis, iaculis tincidunt tortor. Quisque augue ipsum, fermentum eget finibus ut, ultricies id sapien. Praesent tempor metus nec orci tempus.'
          //
          //
        //       },
          //
        //        {
        //               name: 'TOUCHBASE Business Card',
        //               imgSrc: 'img/business_thumbnail.jpg',
        //               desc1: 'PHOTOSHOP',
        //               role: 'Graphic Design',
        //               link: 'touchbase-business.html',
        //               bdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales sapien. Donec condimentum congue est. Nam est quam, suscipit at lorem quis, iaculis tincidunt tortor. Quisque augue ipsum, fermentum eget finibus ut, ultricies id sapien. Praesent tempor metus nec orci tempus.'
        //
          //
        //           },
          //
          //
        //   ];

        // {
        //     name: 'Application Form / Admin',
        //     imgSrc: 'img/form_thumbnail.jpg',
        //     desc1: 'HTML/CSS',
        //     desc2: 'ANGULARJS',
        //     desc3: 'PHOTOSHOP',
        //     role: 'Front-Dev, Graphic Design',
        //     link: 'form-project.html'
        // },
        //
