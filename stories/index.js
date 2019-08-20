import React from 'react';
import { storiesOf } from '@storybook/react';
import select from '../src/component';

const ZSelect = select(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-select">
      <select>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  ))
  .add('predefined value', () => (
    <div className="z-select z-select--box">
      <select>
        <option value="" selected disabled hidden>Choose one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  ))
  .add('preselected value', () => (
    <div className="z-select z-select--box">
      <select>
        <option value="" selected disabled hidden>Choose one</option>
        <option>A</option>
        <option selected>B</option>
        <option>C</option>
      </select>
    </div>
  ))
  .add('label', () => (
    <div className="z-select z-select--label">
      <select required>
        <option selected disabled hidden />
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <label htmlFor="test" className="z-select__label">Name</label>
    </div>
  ))
  .add('label predefined value', () => (
    <div className="z-select z-select--label">
      <select
        placeholder="Select value"
        id="test"
        required
      >
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <label htmlFor="test" className="z-select__label">Name</label>
    </div>
  ))
  .add('colors', () => (
    <div>
      <div className="z-select z-select--success">
        <select
          placeholder="Select value"
          id="test"
          required
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div className="z-select z-select--warning">
        <select
          placeholder="Select value"
          id="test"
          required
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div className="z-select z-select--danger">
        <select
          placeholder="Select value"
          id="test"
          required
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div className="z-select z-select--error">
        <select
          placeholder="Select value"
          id="test"
          required
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
  ))
  .add('disabled', () => (
    <div className="z-select">
      <select
        placeholder="Disabled"
        id="test"
        disabled
      >
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  ))
  .add('dark', () => (
    <div style={{ width: '100%', height: '300px', background: '#333' }}>
      <div className="z-select z-select--dark">
        <select
          placeholder="Select value"
          id="test"
          required
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => <ZSelect id="default" options={['A', 'B', 'C']} />)
  .add('predefined value', () => <ZSelect placeholder="Choose here" required />)
  .add('preselected value', () => <ZSelect placeholder="Choose here" options={['A', 'B', 'C']} selectedIndex={1} required />)
  .add('label', () => <ZSelect id="test" label="Name" required />)
  .add('label predefined value', () => <ZSelect id="test" label="Name" placeholder required options={['A', 'B', 'C']} />)
  .add('colors', () => (
    <div>
      <ZSelect id="success" placeholder="Select value" success />
      <ZSelect id="warning" placeholder="Select value" warning />
      <ZSelect id="danger" placeholder="Select value" danger />
      <ZSelect id="error" placeholder="Select value" error />
    </div>
  ))
  .add('disabled', () => <ZSelect id="disabled" placeholder="Disabled" disabled />)
  .add('dark', () => (
    <div style={{ width: '100%', height: '300px', background: '#333' }}>
      <ZSelect id="dark" placeholder="Select value" dark />
    </div>
  ));
