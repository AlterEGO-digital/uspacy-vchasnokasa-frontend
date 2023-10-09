import React from 'react';
import { createRoot } from 'react-dom/client';

import SettingsWrap from './components/Settings';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SettingsWrap />);
