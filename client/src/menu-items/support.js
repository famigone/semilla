// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'administracion',
    title: 'ADMINISTRACIÓN',
    type: 'group',
    children: [
        {
            id: 'usuarios',
            title: 'USUARIOS',
            type: 'item',
            url: '/sample-page',
            icon: icons.ChromeOutlined
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/mantis-react/',
            icon: icons.QuestionOutlined,
            external: true,
            target: true
        }
    ]
};

export default support;
