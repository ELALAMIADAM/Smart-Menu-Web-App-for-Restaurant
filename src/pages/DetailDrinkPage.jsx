import React from "react";
import { Container, Grid2, Box, Paper, Typography } from "@mui/material";





export default function DetailDrinkPage() {


    return (
        <Box sx={{ background: "linear-gradient(191deg, rgba(255,255,255,0.733566668855042) 33%, rgba(255,0,0,0.29098963804271705) 100%)" }}>
            <Container sx={{ mt: 3 }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Paper elevation={8} sx={{ width: '100%', height: '100%' }}>

                           

                        </Paper>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box elevation={8}>
                            <Typography variant="h3" sx={{ mb: 3 }}>Composition</Typography>
                            <Typography lineHeight={2}>
                                La bière bud, souvent appelée Budweiser, est une lager américaine légère. Elle est composée principalement d'eau, de malt d'orge, de houblon et de levure. Ce qui la distingue, c'est l'utilisation de riz dans le processus de brassage, qui lui confère un goût plus doux et léger. La Budweiser suit un processus de fermentation prolongée à basse température, ce qui contribue à son caractère rafraîchissant. Sa teneur en alcool se situe généralement autour de 5 %.
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box elevation={8}>
                            <Typography variant="h3" sx={{ mb: 3 }}>Origines</Typography>
                            <Typography lineHeight={2}>
                                La Budweiser a été créée en 1876 par Adolphus Busch, inspiré par les lagers tchèques. Innovante pour son époque, elle a introduit la pasteurisation, permettant une meilleure conservation. Rapidement populaire aux États-Unis, elle est devenue un symbole de la culture américaine, souvent liée aux événements sportifs. Aujourd'hui, elle figure parmi les bières les plus consommées au monde.
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 container size={{ xs: 12, md: 6 }}>
                        <Grid2 size={6}>
                            <img src={"src/assets/small_bud_ad_1.png"} alt="Budweiser" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                        </Grid2>
                        <Grid2 size={6}>
                            <img src={"src/assets/small_bud_ad_2.png"} alt="Budweiser" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                        </Grid2>
                        <Grid2 size={6}>
                            <img src={"src/assets/small_bud_ad_3.png"} alt="Budweiser" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                        </Grid2>
                        <Grid2 size={6}>
                            <img src={"src/assets/small_bud_ad_4.png"} alt="Budweiser" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container >
        </Box>
    )
}