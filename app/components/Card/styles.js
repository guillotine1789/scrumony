import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const Card = (props) => {
    const gravatarOptions = {
        size: props.size,
        parameters: { size: 200 },
    };

    const uri = gravatar.imageUrl(gravatarOptions);
    return (
        <Image
            style={styles.avatar}
            source={{ uri }}
            defaultSource={avatarImage}
        />
    );
};

Card.propTypes = {
    size: React.PropTypes.string,
};

export default Card;