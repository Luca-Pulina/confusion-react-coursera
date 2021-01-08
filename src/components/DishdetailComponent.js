import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const RenderComments = ({comments}) => {
    return (
        <>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((dishesComment) => {
                    return (
                        <li>
                            <p>{dishesComment.comment}</p>
                            <p>-- {dishesComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dishesComment.date)))}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                    {this.props.dish && <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                {this.props.dish &&<RenderComments comments={this.props.dish.comments} />}
                </div>

            </div>
        )
    }
}


export default DishDetail;