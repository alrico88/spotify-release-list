import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSettings } from '../../selectors';
import { setSettings } from '../../actions';

function CoversField() {
  const { covers } = useSelector(getSettings);
  const dispatch = useDispatch();

  const coversChangeHandler = useCallback(
    (event) => dispatch(setSettings({ covers: event.target.checked })),
    [dispatch]
  );

  return (
    <div className="field">
      <label className="label has-text-light">Data saver</label>
      <div className="control">
        <div className="field">
          <input
            className="is-checkradio has-background-color is-white"
            id="covers"
            type="checkbox"
            name="covers"
            checked={covers}
            onChange={coversChangeHandler}
          />
          <label htmlFor="covers" className="has-text-weight-semibold">
            Display album covers
          </label>
        </div>
      </div>
    </div>
  );
}

export default CoversField;