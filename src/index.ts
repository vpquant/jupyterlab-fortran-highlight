import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the fortran_highlight extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'fortran_highlight',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension fortran_highlight is activated!');
  }
};

export default extension;
