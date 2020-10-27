import React from "react";
import "./About.css";

/* const { kakao } = window;
const Cinemas = Array.from(Theater_data) */

const About = ({ searchPlace }) => {
  /* var a = []
  var b = []
  useEffect(() => {
    
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    Cinemas.filter((cinema)=>(cinema.LOCATION==="강원/제주")).map((cinema) => ps.keywordSearch(cinema.THEATER_NAME, placesSearchCB));

   function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();
        a=data
        for (let i = 0; i < 3; i++) {
          b.push(data[i])
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        console.log(b)

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
  }, [searchPlace]); */

  return (
    <body>
      {/* <div id='myMap' style={{
        width: '500px', 
        height: '500px'
    }}></div> */}
      <span>준비중..</span>
    </body>
  );
};

export default About;
