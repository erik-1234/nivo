import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextControl extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        onChange: PropTypes.func.isRequired,
        help: PropTypes.string.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value
    }

    render() {
        const { id, label, value, onChange, help } = this.props

        return (
            <div className="chart-controls_item">
                <label className="control_label" htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id}
                    type="text"
                    className="control-text"
                    value={value}
                    onChange={onChange}
                />
                <div className="control-help">{help}</div>
            </div>
        )
    }
}
