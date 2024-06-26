import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'App',
    Board: () => <Navbar />,
    environmentProps: {
        windowWidth: 2308,
        windowHeight: 768,
        canvasWidth: 1216.641975308642,
        canvasHeight: 3666.5847347118497,
    },
});
