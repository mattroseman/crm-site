import * as React from 'react';

export interface CardProps {
    cardInfo: string[];
    onEdit: () => void;
}

export default class Card extends React.Component<CardProps, undefined> {
    render() {
        const cardText = this.props.cardInfo.map((info: string, index: number) => {
            return (
                <div key={index}>{info}</div>
            );
        });
        return (
            <div className="card" onClick={this.props.onEdit}>
                <div className="card__info">{cardText}</div>
                <div className="card__status"></div>
            </div>
        );
    }
}
