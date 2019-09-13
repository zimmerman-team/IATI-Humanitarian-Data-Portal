import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { DebugBox } from 'app/utils/layout';
import 'assets/decoration_landing.svg';
import { DecorationLanding } from 'app/modules/common/ModuleBackground/assets/DecorationLanding';

export function ModuleBackground() {
  return (
    <DebugBox>
      <Container maxWidth="lg">
        <Box position="relative" display="block">
          <Box position="absolute" right="10" top="100px">
            <DecorationLanding />
          </Box>
        </Box>
      </Container>
    </DebugBox>
  );
}
