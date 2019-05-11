import xs from 'xstream';
import {ReactSource} from '@cycle/react';
import {makeDOMDriver} from '@cycle/react-dom';
import {run} from '@cycle/run';
import CycleReactPragma from '../src/index';
const assert = require('assert');

function createRenderTarget(id: string | null = null) {
  const element = document.createElement('div');
  element.className = 'cycletest';
  if (id) {
    element.id = id;
  }
  document.body.appendChild(element);
  return element;
}

describe('hyperscript helpers', function() {
  it('w/ nothing', done => {
    function main(sources: {react: ReactSource}) {
      return {
        react: xs.of(<h1></h1>),
      };
    }

    const target = createRenderTarget();
    run(main, {
      react: makeDOMDriver(target),
    });

    setTimeout(() => {
      const h1 = target.querySelector('h1') as HTMLElement;
      assert.strictEqual(!!h1, true);
      assert.strictEqual(h1.tagName, 'H1');
      done();
    }, 100);
  });

  it('w/ text child', done => {
    function main(sources: {react: ReactSource}) {
      return {
        react: xs.of(<h1>heading 1</h1>),
      };
    }

    const target = createRenderTarget();
    run(main, {
      react: makeDOMDriver(target),
    });

    setTimeout(() => {
      const h1 = target.querySelector('h1') as HTMLElement;
      assert.strictEqual(!!h1, true);
      assert.strictEqual(h1.innerHTML, 'heading 1');
      done();
    }, 100);
  });

  it('w/ children array', done => {
    function main(sources: {react: ReactSource}) {
      return {
        react: xs.of(
            <section>
              <h1>heading 1</h1>
              <h2>heading 2</h2>
              <h3>heading 3</h3>
            </section>
        ),
      };
    }

    const target = createRenderTarget();
    run(main, {
      react: makeDOMDriver(target),
    });

    setTimeout(() => {
      const section = target.querySelector('section') as HTMLElement;
      assert.strictEqual(!!section, true);
      assert.strictEqual(section.children.length, 3);
      done();
    }, 100);
  });
});
