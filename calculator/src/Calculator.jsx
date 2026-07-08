import { useState } from 'react';
import { Box, Button, TextField, Container, Typography, Grid2 } from '@mui/material';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input)); // Evaluate the expression
            } catch {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        <Container className='container' maxWidth="xs" sx={{ mt: 5 }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4">React Calculator</Typography>
            </Box>
            <TextField
                variant="outlined"
                fullWidth
                value={input}
                disabled
                sx={{ mb: 1 }}
            />
            <TextField
                variant="outlined"
                fullWidth
                value={result}
                disabled
                sx={{ mb: 2 }}
            />
            <Grid2 container spacing={1} >
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                    <Grid2 item xs={2} key={btn} size={{ xs: 3 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => handleButtonClick(btn)}
                        >
                            {btn}
                        </Button>
                    </Grid2>
                ))}
                <Grid2 item xs={12}>
                    <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={() => handleButtonClick('C')}
                    >
                        Clear
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default Calculator;
