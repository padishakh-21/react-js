import Card from "./Card";

const MainSection = (props) => {

const info=[
  {id:1, title:"Card 1", text:" 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum dignissimos veritatis ab natus, beatae odio ipsum, dolorem nostrum error quae necessitatibus laborum dolor ducimus sint illo adipisci temporibus at rerum tempore sunt! Nesciunt, velit."},
  {id:2, title:"Card 2", text:" 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum dignissimos veritatis ab natus, beatae odio ipsum, dolorem nostrum error quae necessitatibus laborum dolor ducimus sint illo adipisci temporibus at rerum tempore sunt! Nesciunt, velit."},
  {id:3, title:"Card 3", text:" 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum dignissimos veritatis ab natus, beatae odio ipsum, dolorem nostrum error quae necessitatibus laborum dolor ducimus sint illo adipisci temporibus at rerum tempore sunt! Nesciunt, velit."},
]


   return (
     <>
       <section className="main">
         <Card info={info[0]} color="red" num={props.num} />
         <Card info={info[1]} color="yellow" num={props.num}/>
         <Card info={info[2]} color="green" num={props.num}/>
       </section>
     </>
   );
 };

 export default MainSection;