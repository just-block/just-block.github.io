import path from 'node:path';
import { partytownVite } from '@builder.io/partytown/utils';

export default ({ command }) => ({
    plugins: [
        partytownVite({
            dest: path.join(__dirname, 'dist', '~partytown'),
        }),
    ],
});