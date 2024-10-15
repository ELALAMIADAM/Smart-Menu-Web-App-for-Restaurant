import React from "react";
import agentVirtuel from "../assets/man.jpg"; // Assurez-vous que le chemin est correct
import { Grid2, Button, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    return (
        <div style={{ background: "radial-gradient(circle, rgba(255,255,255,0.733566668855042) 65%, rgba(255,0,0,0.29098963804271705) 100%)", overflowY:"hidden" }} >
            <div
                className="content"
                style={{

                    display: "flex",
                    height: "100vh",
                    justifyContent: "space-between",
                    alignItems: "center", // Aligne les items au centre verticalement
                    gap: "20px",         // Espacement entre les colonnes
                    maxWidth: "60vw",
                    margin: "0 auto",    // Centre horizontalement
                    padding: "20px",     // Ajoute du padding autour du contenu
                    backgroundImage: `url(${agentVirtuel})`, // Utilisation correcte de backgroundImage
                    backgroundSize: "cover", // Couvre toute la zone de la div
                    backgroundPosition: "center", // Centre l'image
                    borderRadius: "10px", // Arrondi les coins de la div
                    padding: "50px", // Ajoute du padding autour du contenu
                    color: "white", // Change la couleur du texte si besoin pour le contraste

                }}
            >
                {/* <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <button
                        className="btn-carte"
                        style={{
                            padding: "15px",
                            width:"100%",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "rgba(180, 216, 244, 0.8)", // Couleur avec transparence
                        }}
                    >
                        Votre carte
                    </button>
                    <button
                        className="btn-rencontre"
                        style={{
                            padding: "15px",
                            width:"100%",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "rgba(220, 179, 241, 0.8)", // Couleur avec transparence
                        }}
                    >
                        Rencontre
                    </button>
                    <button
                        className="btn-musique"
                        style={{
                            padding: "15px",
                            width:"100%",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "rgba(246, 243, 182, 0.8)", // Couleur avec transparence
                        }}
                    >
                        Musique
                    </button>
                </div> */}

                {/* Zone centrale avec l'image comme arrière-plan */}
                {/* <div style={{
                    width: "300px", // Ajuste la largeur selon tes besoins
                    height: "300px", // Ajuste la hauteur selon tes besoins
                    backgroundImage: `url(${agentVirtuel})`,
                    backgroundSize: "cover", // Couvre toute la zone de la div
                    backgroundPosition: "center", // Centre l'image
                    borderRadius: "10px", // Arrondi les coins de la div
                }}></div> */}

                {/* Colonne droite avec les boutons */}
                {/* <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <button
                        className="btn-specialite"
                        style={{
                            padding: "15px",
                            width: "100%",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "rgba(249, 194, 194, 0.8)", // Couleur avec transparence
                        }}
                    >
                        Spécialité
                    </button>
                    <button
                        className="btn-jeux"
                        style={{
                            padding: "15px",
                            width: "100%",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "rgba(180, 247, 245, 0.8)", // Couleur avec transparence
                        }}
                    >
                        Jeux
                    </button>
                    <button
                        className="btn-calendrier"
                        style={{
                            padding: "15px",
                            width: "100%",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "rgba(228, 210, 165, 0.8)", // Couleur avec transparence
                        }}
                    >
                        Calendrier
                    </button>
                </div> */}


            </div>
            <div style={{ display: "flex", height: "100vh", width: "100vw", position: "absolute", top: 0 }}>

                <div style={{ width: "50%", height: "100%", display: "flex" }}>

                    <div style={{ width: "50%", height: "100%" }}>
                        {/* Button */}
                        <Stack height={"100%"} justifyContent={"space-evenly"} sx={{ marginLeft: 2 }}>
                            <Paper elevation={20}>
                                <Button variant="contained" sx={{ py: 3.5, bgcolor: "#C9E2FF", color: 'black' }} fullWidth
                                    onClick={() => navigate("/carte")}>Votre carte
                                </Button>
                            </Paper>
                            <Paper elevation={20}>
                                <Button variant="contained" sx={{ py: 3.5, bgcolor: "#D793F7", color: 'black' }} fullWidth>Rencontre</Button>
                            </Paper>
                            <Paper elevation={20}>
                                <Button variant="contained" sx={{ py: 3.5, bgcolor: "#FFFB95", color: 'black' }} fullWidth> Musique</Button>
                            </Paper>
                        </Stack>
                    </div>
                    <div style={{ width: "50%", height: "100%" }}>

                    </div>

                </div>

                <div style={{ width: "50%", height: "100%" }}>

                </div><div style={{ width: "50%", height: "100%", display: "flex" }}>

                    <div style={{ width: "50%", height: "100%" }}>
                        {/* Button */}

                    </div>
                    <div style={{ width: "50%", height: "100%" }}>
                        <Stack height={"100%"} justifyContent={"space-evenly"} sx={{ marginRight: 2 }}>
                            <Paper elevation={20}>
                                <Button variant="contained" sx={{ py: 3.5, bgcolor: "#F0B3B3", color: 'black' }} fullWidth
                                 onClick={() => navigate("/nouveaute")}> Spécialité</Button>
                            </Paper>
                            <Paper elevation={20}>
                                <Button variant="contained" sx={{ py: 3.5, bgcolor: "#A1F2F7", color: 'black' }} fullWidth>Jeux</Button>
                            </Paper>
                            <Paper elevation={20}>
                                <Button variant="contained" sx={{ py: 3.5, bgcolor: "#EDD189", color: 'black' }} fullWidth> Calendrier</Button>
                            </Paper>
                        </Stack>
                    </div>

                </div>

            </div>
        </div>
    );
}
