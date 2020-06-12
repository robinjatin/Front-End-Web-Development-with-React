import React from 'react';
import {Card,CargImg, CardImgOverlay,CardText,CardBody,CardTitle, CardImg} from 'reactstrap';



    //Definition of constructor of this component 
    
    //Change the state of the componente like this:
    function RenderMenuItem({dish, onClick}){
        return(
            <Card onClick={()=>onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt = {dish.name}/>
            <CardImgOverlay body className="ml-5">
                <CardTitle >
                    {dish.name}
                </CardTitle>
            </CardImgOverlay>
        </Card>
        );
    }

        const Menu= (props) => {
            const menu = props.dishes.map((dish)=>{
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                       <RenderMenuItem dish={dish} onClick={props.onClick} />
                    </div>
                );
            });
            console.log('Menu component render is invoked');
            return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                    </div>
                </div>
            );
        }
  
        

export default Menu; 
 
// import { Card, CardImg, CardImgOverlay, CardText, CardBody,
//     CardTitle } from 'reactstrap';

// class Menu extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedDish: null
//         }
//     }

//     onDishSelect(dish) {
//         this.setState({ selectedDish: dish});
//     }

//     renderDish(dish) {
//         if (dish != null)
//             return(
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                       <CardTitle>{dish.name}</CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         else
//             return(
//                 <div></div>
//             );
//     }

//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//               <div  className="col-12 col-md-5 m-1">
//                 <Card key={dish.id}
//                   onClick={() => this.onDishSelect(dish)}>
//                   <CardImg width="100%" src={dish.image} alt={dish.name} />
//                   <CardImgOverlay>
//                       <CardTitle>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                 </Card>
//               </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <div className="row">
//                   <div  className="col-12 col-md-5 m-1">
//                     {this.renderDish(this.state.selectedDish)}
//                   </div>
//                 </div>
//             </div>
//         );
//     }
// }
