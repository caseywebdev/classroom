const MINIFY = process.env.MINIFY === '1';

module.exports = [

  // Styles
  {
    transformers: [].concat(
      {name: 'directives', only: 'src/**/*.scss'},
      {name: 'sass', only: '**/*.scss'},
      'autoprefixer',
      {
        name: 'local-css',
        only: 'src/**/*.scss',
        except: 'src/global.scss',
        options: {base: 'src', debug: !MINIFY}
      },
      MINIFY ? {
        name: 'clean-css',
        only: '**/*.+(scss|css)',
        options: {processImport: false}
      } : []
    ),
    builds: {'src/index.scss': 'docs/index.css'}
  },

  // JavaScript
  {
    transformers: [].concat(
      {name: 'sass', only: '**/*.scss'},
      {
        name: 'local-css',
        only: 'src/**/*.scss',
        options: {base: 'src', debug: !MINIFY, export: true}
      },
      {name: 'json', only: '**/*.scss'},
      {
        name: 'replace',
        only: '**/*.js',
        options: {
          flags: 'g',
          patterns: {
            'process.env.NODE_ENV': MINIFY ? "'production'" : "'development'"
          }
        }
      },
      {
        name: 'babel',
        only: [
          'src/**/*.+(js|scss)'
        ],
        options: {presets: ['es2015', 'stage-0', 'react']}
      },
      {
        name: 'concat-commonjs',
        only: '**/*.+(js|scss)',
        options: {
          entry: 'src/index.js',
          extensions: ['.js', '.scss']
        }
      },
      MINIFY ? {
        name: 'uglify-js',
        only: '**/*.+(js|scss)',
        except: ['**/*+(-|_|.)min.js', 'node_modules/ammo.js/ammo.js']
      } : []
    ),
    builds: {'src/index.js': 'docs/index.js'}
  }
];
