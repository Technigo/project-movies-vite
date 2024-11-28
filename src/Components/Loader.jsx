
import { Oval } from 'react-loader-spinner';

export const Loader = () => {

    const values = {
        color: '#4fa94d',
        height: 80,
        width: 80,
        visible: true,
        ariaLabel: 'oval-loading',
        secondaryColor: '#4fa94d',
        strokeWidth: 2,
        strokeWidthSecondary: 2,
    }
    return <Oval {...values} />;
};

