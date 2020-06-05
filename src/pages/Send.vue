<template>
	<div>
		<h1>Send tx</h1>
		<input
			v-model="to"
			placeholder="to"
		>
		<div>
			<textarea
				v-model="data"
				rows="10"
				cols="80"
				placeholder="data"
			/>
		</div>
		<button @click="deploy">
			Deploy
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			to: '',
			data: '',
		};
	},
	methods: {
		async deploy() {
			const ethereum = window.ethereum;
			const accounts = await ethereum.enable();
			const txData = {
				from: accounts[0],
				to: this.to,
				data: this.data,
			};
			ethereum.sendAsync({
				method: 'eth_sendTransaction',
				params: [txData],
			}, (tx) => {
				console.log(tx);
			});
		},
	},
};
</script>
