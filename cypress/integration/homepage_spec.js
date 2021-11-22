describe('Main Page Render', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.intercept('GET', 'https://randomuser.me/api/?results=3', {
            statusCode: 200,
            body: {
              "results": [
                {
                "gender": "female",
                "name": {
                  "title": "Miss",
                  "first": "Fredrikke",
                  "last": "Slåtten"
                },
                "location": {
                  "street": {
                    "number": 3629,
                    "name": "Rosings gate"
                  },
                  "city": "Torsken",
                  "state": "Aust-Agder",
                  "country": "Norway",
                  "postcode": "2555",
                  "coordinates": {
                    "latitude": "54.0896",
                    "longitude": "125.2953"
                  },
                  "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                  }
                },
                "email": "fredrikke.slatten@example.com",
                "login": {
                  "uuid": "5c255bd1-4ed0-4853-833e-669179921299",
                  "username": "tinykoala448",
                  "password": "chevy",
                  "salt": "61cFvoHn",
                  "md5": "ab093de60e5c4ee4465aaf2181c11d8e",
                  "sha1": "a32ddaa0e2cdbaa4cb375fee1760116455905499",
                  "sha256": "83213dd2220977b414debba012607aa981d3f2d490da7a08cb0ae53bf4992a0f"
                },
                "dob": {
                  "date": "1978-02-25T23:20:55.012Z",
                  "age": 43
                },
                "registered": {
                  "date": "2003-12-11T21:44:14.865Z",
                  "age": 18
                },
                "phone": "66101554",
                "cell": "47975498",
                "id": {
                  "name": "FN",
                  "value": "25027835018"
                },
                "picture": {
                  "large": "https://randomuser.me/api/portraits/women/46.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
                },
                "nat": "NO"
              },

              {
              "gender": "male",
              "name": {
                "title": "Mr",
                "first": "Carl",
                "last": "Arnold"
              },
              "location": {
                "street": {
                  "number": 5419,
                  "name": "The Avenue"
                },
                "city": "Drogheda",
                "state": "Kerry",
                "country": "Ireland",
                "postcode": 54751,
                "coordinates": {
                  "latitude": "-2.3155",
                  "longitude": "-98.9835"
                },
                "timezone": {
                  "offset": "-5:00",
                  "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
              },
              "email": "carl.arnold@example.com",
              "login": {
                "uuid": "bec86fc4-5e14-4496-a038-d4579265dd90",
                "username": "redostrich977",
                "password": "battery",
                "salt": "LixuY1Mb",
                "md5": "b994af4ed7721bf994d95d55bf46b6d9",
                "sha1": "8370b032f0d67582782157a3da827c8adc1b2322",
                "sha256": "7beebb1ce643ecec444e8a62e768406be1e31f65c49fd0066fcecd3345cdc684"
              },
              "dob": {
                "date": "1997-05-27T20:21:57.609Z",
                "age": 24
              },
              "registered": {
                "date": "2012-03-12T14:47:48.289Z",
                "age": 9
              },
              "phone": "041-660-2564",
              "cell": "081-460-8763",
              "id": {
                "name": "PPS",
                "value": "3726210T"
              },
              "picture": {
                "large": "https://randomuser.me/api/portraits/men/25.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
              },
              "nat": "IE"
              },
              {
              "gender": "male",
              "name": {
                "title": "Mr",
                "first": "Funs",
                "last": "Doelman"
              },
              "location": {
                "street": {
                "number": 3127,
                "name": "Domineestraat"
                },
                "city": "De Klomp",
                "state": "Noord-Holland",
                "country": "Netherlands",
                "postcode": 34000,
                "coordinates": {
                  "latitude": "-68.7986",
                  "longitude": "62.8958"
                },
                "timezone": {
                  "offset": "+11:00",
                  "description": "Magadan, Solomon Islands, New Caledonia"
              }
              },
              "email": "funs.doelman@example.com",
              "login": {
                "uuid": "aff948a9-1389-466a-8dba-55b3a420b042",
                "username": "yellowfish810",
                "password": "byebye",
                "salt": "l58NL8eU",
                "md5": "2cb726fdea7a84d311d7f9d3e698b8df",
                "sha1": "55b3632e95b137f679336b7f22eeefc242da7425",
                "sha256": "4f0350ebc674cfc3830d918d75e1c9fe532adf7f51a2a503c5c3fc8b1cf1841c"
              },
              "dob": {
                "date": "1998-09-02T00:16:03.370Z",
                "age": 23
              },
              "registered": {
                "date": "2002-11-18T09:52:49.295Z",
                "age": 19
              },
              "phone": "(123)-277-2704",
              "cell": "(613)-380-6895",
              "id": {
                "name": "BSN",
                "value": "83334217"
              },
              "picture": {
                "large": "https://randomuser.me/api/portraits/men/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
              },
              "nat": "NL"
              }],
              "info": {
                "seed": "cee01ecf39fe2e36",
                "results": 3,
                "page": 1,
                "version": "1.3"
              }
              }
      });

    })

    it('Should have a header with the App\'s name on page load', () => {
      cy.get('h1').contains('My Clerks')
    })

    it('Should display a drop down menu on load', () => {
      cy.get('.color-dropdown')
          .should('be.visible')
          .contains('option')
      })

    it('Should display a user card on load', () => {
      cy.get('.profile-card').should('be.visible')
      cy.get('h2').should('be.visible').contains('Fredrikke')
      cy.get('h3').should('be.visible').contains('Norway')
      cy.get('.profile-card > :nth-child(4)').should('be.visible').contains('fredrikke.slatten@example.com')
      cy.get('.profile-card > :nth-child(5)').should('be.visible').contains('66101554')
      })
      
      it('Should display two navigation buttons on load', () => {
        cy.get('.prev').should('be.visible')
        cy.get('.next').should('be.visible')
      })
  
    
})
