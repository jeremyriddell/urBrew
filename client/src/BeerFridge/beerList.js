import React from "react";
import Thumbnail from "../BeerFridge/thumbnail.js";
import { Container, Row, Col } from "./grid";

// Exporting both BeerList and BeerListItem from this file

// RecipeList renders a bootstrap list item
export function BeerList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// BeerListItem renders a bootstrap list item containing data from the beer api call
export function BeerListItem({
    thumbnail = "https://placehold.it/300x300",
    title,
    ingredients,
    href
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Ingredients: {ingredients}</p>
                        <a rel="noreferrer noopener" target="_blank" href={href}>
                            Go to recipe!
            </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
};
