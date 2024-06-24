
import { Oval } from 'react-loader-spinner';

export const Loader = () => {

    const values = {
        color: '#4fa94d',
        height: 80,
        width: 80,
        visible: true,
        ariaLabel: 'oval-loading',
        secondaryColor: '#4fa94d',
    }
    return <Oval {...values} />;
};