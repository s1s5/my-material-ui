import * as React from 'react'

import {
    Container, Paper, Divider,
    Stepper, Step, StepLabel, StepContent,
} from '@material-ui/core';


const MyStepper = () => {
    const [step, set_step] = React.useState(1)
    return (
        <Container>
          <Paper>
            <Stepper activeStep={step}>
              <Step completed={true}>
                <StepLabel> </StepLabel>
              </Step>
              <Step completed={false}>
                <StepLabel> </StepLabel>
              </Step>
              <Step completed={false}>
                <StepLabel> </StepLabel>
              </Step>
            </Stepper>
            <Divider/>
            <Stepper activeStep={step} orientation="vertical">
              <Step completed={true}>
                <StepLabel> 一番最初のステップ</StepLabel>
              </Step>
              <Step completed={false}>
                <StepLabel> 二番目のステップ</StepLabel>
                <StepContent>
                  ここに何かステップに関する詳細を書くことができる。
                  現在アクティブなステップにしか表示されない
                </StepContent>
              </Step>
              <Step completed={false}>
                <StepLabel> 三番目のステップ</StepLabel>
              </Step>
            </Stepper>
          </Paper>
        </Container>
    )
}

export default MyStepper
