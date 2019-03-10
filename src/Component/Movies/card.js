import React from 'react';
import { Card} from 'react-bootstrap';
class MovieCard extends React.Component {
    render() {
        const { Title, Year, Type, Poster } = this.props;
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Img style={{ height: '18rem'}} variant="top" src={Poster === 'N/A' ? 'http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/seville-01-1280x1280.jpg' : Poster} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>{Year}</Card.Text>
                    <Card.Text>{Type}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default MovieCard;