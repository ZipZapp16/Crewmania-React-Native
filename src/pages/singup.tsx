import { Grid, GridItem, Text, FormControl, FormLabel, Input, Button, Flex, Box, IconButton, useBreakpointValue, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Singup: React.FC = () => {
    const { t } = useTranslation();
    const breakpointImage = useBreakpointValue({ base: '120px', lg: '180px' });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your login logic here
    };

    return (
        <div>
            <Grid templateColumns="repeat(12, 1fr)" gap={2} height={'90vh'} marginTop={{base:'5vh', lg:'80px'}}>
                <GridItem colStart={2} colEnd={{base:12, lg:5}} marginTop={{base:'1', lg:'40%'}}  textAlign={'center'} height={'30%'} marginBottom={'16px'}>
                    <img src="images/LogoCreowmania.svg" alt="Creowmania" style={{ maxWidth: breakpointImage, margin:'auto' }} />
                    <Box marginY={'16px'}>
                    <Text as='b' fontSize={{base:'24px',lg:'32px'}}>
                        {t('signup.title')}
                        </Text>
                    </Box>
                </GridItem>
                <GridItem colStart={{base: 2, lg: 6}} colEnd={12} minHeight={'40%'}>
                    <form onSubmit={handleSubmit}>
                        <Flex direction={'column'} justifyContent={'center'} whiteSpace={'between'}>
                            <Box flex={'1'} marginY={'8px'}> 
                            <FormControl id="username" marginX={'auto'} >
                                <FormLabel fontSize={{base:'18px', lg:'22px'}} >{t('signup.username')}</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none"  children={<img src={'/public/images/icons/mail_ic.svg'} alt="Mail"></img>} />
                                    <Input
                                        type="email"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        bg="#F8FCFF"
                                        placeholder="ejemplo@mail.com"
                                    />
                                </InputGroup>
                            </FormControl>
                            </Box>
                            <Box flex={'1'} marginY={'8px'}>
                            <FormControl id="password" marginX={'auto'}  >
                                <FormLabel fontSize={{base:'18px', lg:'22px'}}  >{t('signup.password')}</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none"  children={<img src={'/public/images/icons/lock_ic.svg'} alt="Mail"></img>} />
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    bg="#F8FCFF"
                                    placeholder="********"
                                />
                                </InputGroup>
                            </FormControl>
                            </Box>
                            <Box flex={'1'} marginY={'16px'}>
                            <Button type="submit" width={'100%'} minHeight={{base:'38px', lg:'64px'}} bg="#4054A9" color="white" fontSize={{base:'16',lg:'20'}} borderRadius={'lg'} flex='1'>{t('signup.button')}</Button>
                            </Box>
                        </Flex>
                    </form>
                </GridItem>

                <GridItem colStart={{base: 2, lg: 6}} colEnd={12}  textAlign={'center'} height={'30%'}>
                    <Flex justifyContent={'center'} width={'100%'} minHeight={'34px'}>
                        <Box borderTop="2px solid #DADADA" marginX="auto" width="25%" height={'2px'} marginY={'auto'}/>
                        <Box marginX="auto" width="40%" alignItems={'center'}>
                        <Text fontSize={{base:'14px', lg:'20px'}}  color='#C8C8C8' marginY={'3px'}>{t('signup.other')}</Text>
                        </Box>
                        <Box borderTop="2px solid #DADADA" marginX="auto" width="25%" height={'2px'} marginY={'auto'}/>
                    </Flex>
                    <Flex justifyContent={'center'} width={'100%'} marginY={'16px'}>
                        <IconButton aria-label="Facebook" icon={<img src={'/public/images/facebook_ic.svg'} alt="Facebook" />} variant='outline' borderRadius={'lg'} flex='1' marginX={{base:'4px', lg:'18px'}} maxWidth={'20%'} minHeight={'20%'} />
                        <IconButton aria-label="Instagram" icon={<img src={'/public/images/Instagram.svg'} alt="Instagram" />} variant='outline' borderRadius={'lg'} flex='1' marginX={{base:'4px', lg:'18px'}} maxWidth={'20%'} minHeight={'20%'} />
                        <IconButton aria-label="X" icon={<img src={'/public/images/x_ic.svg'} alt="X" />} variant='outline' borderRadius={'lg'} flex='1' marginX={{base:'4px', lg:'18px'}} maxWidth={'20%'} minHeight={'20%'} />
                        <IconButton aria-label="Google" icon={<img src={'/public/images/google_ic.svg'} alt="Google" />} variant='outline' borderRadius={'lg'} flex='1' marginX={{base:'4px', lg:'18px'}} maxWidth={'20%'} minHeight={'20%'} />
                        <IconButton aria-label="Apple" icon={<img src={'/public/images/apple_ic.svg'} alt="Apple" />} variant='outline' borderRadius={'lg'} flex='1' marginX={{base:'4px', lg:'18px'}} maxWidth={'20%'} minHeight={'20%'} />
                    </Flex>
                    <Text fontSize={{base:'14px', lg:'18px'}} marginY={'8px'}>{t('signup.haveAccount')} <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>{t('signup.login')}</a></Text>
                </GridItem>
            </Grid>
        </div>
    );
};