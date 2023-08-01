import React from "react";
import { Button, Card, CardContent} from "product_componets";
import "./ProductCard.css";


interface ProductCardProps {
    id: number;
    title: string;
    image: string;
    price: number;
    onButtonClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                     id,
                                                     title,
                                                     image,
                                                     price,
                                                     onButtonClick,
                                                 }) => {
    return (
        <Card sx={{ maxWidth: 900, height: 400 }}>
            <CardMedia component="img" height="140" image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                <Button onClick={() => onButtonClick()} variant="contained">
                    Show Current
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
