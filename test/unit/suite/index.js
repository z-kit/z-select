import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import select from '../../../src/component';

configure({ adapter: new Adapter() });

const ZSelect = select(React.createElement);

test('Select', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZSelect />).html();
  const expected = shallow(
    <div className="z-select">
      <select />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Attributes', (t) => {
  const msg = 'should pass through';
  const actual = shallow(<ZSelect required />).html();
  const expected = shallow(
    <div className="z-select">
      <select required />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Options', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZSelect options={['A', 'B', 'C']} />).html();
  const expected = shallow(
    <div className="z-select">
      <select>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Pre-select value', (t) => {
  const msg = 'should render selected value';
  const actual = shallow(<ZSelect options={['A', 'B', 'C']} selectedIndex={1} />).html();
  const expected = shallow(
    <div className="z-select">
      <select>
        <option>A</option>
        <option selected>B</option>
        <option>C</option>
      </select>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Placeholder', (t) => {
  const msg = 'should render hidden option';
  const actual = shallow(<ZSelect placeholder="Choose one" options={['A', 'B', 'C']} />).html();
  const expected = shallow(
    <div className="z-select">
      <select>
        <option selected disabled hidden>Choose one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Floating label', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZSelect label="Type something" />).html();
  const expected = shallow(
    <div className="z-select z-select--label">
      <select />
      <label className="z-select__label">Type something</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Automatic label for', (t) => {
  const msg = 'should be enabled';
  const actual = shallow(<ZSelect id="test" label="Type something" />).html();
  const expected = shallow(
    <div className="z-select z-select--label">
      <select id="test" />
      <label className="z-select__label" htmlFor="test">Type something</label>
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZSelect success />).html();
  const expected = shallow(
    <div className="z-select z-select--success">
      <select />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZSelect warning />).html();
  const expected = shallow(
    <div className="z-select z-select--warning">
      <select />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZSelect danger />).html();
  const expected = shallow(
    <div className="z-select z-select--danger">
      <select />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Custom color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZSelect color="blue" />).html();
  const expected = shallow(
    <div className="z-select">
      <select style={{ borderColor: 'blue' }} />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Disabled', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZSelect disabled />).html();
  const expected = shallow(
    <div className="z-select">
      <select disabled />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Dark mode', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZSelect dark />).html();
  const expected = shallow(
    <div className="z-select z-select--dark">
      <select />
    </div>
  ).html();
  return t.deepEqual(actual, expected, msg);
});
