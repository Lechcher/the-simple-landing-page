import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1419.5555555555557,
        windowWidth: 1627,
        canvasHeight: 1819.0512354146556,
        windowHeight: 1253,
    },
});
