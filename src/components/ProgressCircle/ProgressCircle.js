import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

export default class ProgressCircle extends React.Component {
    getStatusColor(statusPercentage) {
        var hue=((1-((100-statusPercentage)/100))*150).toString(10);
        return ["hsl(",hue,",100%,50%)"].join("");
    }

    render() {
        return(
            <div style={{color: this.getStatusColor(this.props.progress)}}>
                <CircularProgressbar
                    percentage={this.props.progress}
                    textForPercentage={null}
                    backgroundPadding={25}
                    classForPercentage={(percent) => percent < 100 ? 'incomplete' : 'complete'}
                />
            </div>
        )
    }
}