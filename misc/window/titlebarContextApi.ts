/**
 * Copyright (c) 2021, Rishabh2015
 *
 * This software is provided "as-is", without any express or implied warranty. In no event
 * will the authors be held liable for any damages arising from the use of this software.
 * Read the LICENSE file for more details.
 *
 * @author  : rishabh2015
 * @project : Electron Window
 * @package : Titlebar Context API
 */

import { TitlebarContextApi } from './titlebarContext';

const context: TitlebarContextApi = (window as any).electron_window?.titlebar;

export default context;
